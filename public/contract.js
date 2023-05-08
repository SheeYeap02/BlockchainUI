// let account;

// const connectAccount = async () => {
//   if (window.ethereum !== "undefined") {
//     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//     account = accounts[0];
//     document.getElementById("accountAddr").innerHTML = account;
//   }
// };

//2- connect to smart contract
const accessToContract = async () => {
  const ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "retailer",
          type: "address",
        },
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
        {
          internalType: "string",
          name: "rateType",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "rateScore",
          type: "uint8",
        },
      ],
      name: "customerRate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "retailer",
          type: "address",
        },
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
      ],
      name: "distributeDurianToRetail",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "DurianNotExist",
      type: "error",
    },
    {
      inputs: [],
      name: "DurianNotUnique",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
      ],
      name: "durianReceived_Distributor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "sellingPrice",
          type: "uint8",
        },
      ],
      name: "durianReceived_Retailer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "tree",
          type: "uint8",
        },
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
        {
          internalType: "uint16",
          name: "weight",
          type: "uint16",
        },
        {
          internalType: "string",
          name: "durianType",
          type: "string",
        },
      ],
      name: "harvestDurian",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "InvalidState",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "msg",
          type: "string",
        },
      ],
      name: "Registered",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "role",
          type: "string",
        },
      ],
      name: "registerRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "distributor",
          type: "address",
        },
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
      ],
      name: "sendToDistributor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "Unauthorized",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          components: [
            {
              internalType: "enum DurianGuard.State",
              name: "dState",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "durianId",
              type: "string",
            },
            {
              internalType: "string",
              name: "durianType",
              type: "string",
            },
            {
              internalType: "uint16",
              name: "weightInGram",
              type: "uint16",
            },
            {
              internalType: "uint8",
              name: "sellingPrice",
              type: "uint8",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "farmName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "farmAddress",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "tree",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "harvestedTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "outToDistributorTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.HarvestInfo",
              name: "harvestInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "distributorName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "distributorAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "sentToDistributorTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "distributedTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.DistributionInfo",
              name: "distributionInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "retailerName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "retailerAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "retailReceiveTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.RetailInfo",
              name: "retailInfo",
              type: "tuple",
            },
          ],
          indexed: false,
          internalType: "struct DurianGuard.Durian",
          name: "durian",
          type: "tuple",
        },
      ],
      name: "sentDurian",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "distributors",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "distributors_names",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "durian_ratings",
      outputs: [
        {
          components: [
            {
              internalType: "enum DurianGuard.State",
              name: "dState",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "durianId",
              type: "string",
            },
            {
              internalType: "string",
              name: "durianType",
              type: "string",
            },
            {
              internalType: "uint16",
              name: "weightInGram",
              type: "uint16",
            },
            {
              internalType: "uint8",
              name: "sellingPrice",
              type: "uint8",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "farmName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "farmAddress",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "tree",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "harvestedTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "outToDistributorTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.HarvestInfo",
              name: "harvestInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "distributorName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "distributorAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "sentToDistributorTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "distributedTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.DistributionInfo",
              name: "distributionInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "retailerName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "retailerAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "retailReceiveTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.RetailInfo",
              name: "retailInfo",
              type: "tuple",
            },
          ],
          internalType: "struct DurianGuard.Durian",
          name: "durian",
          type: "tuple",
        },
        {
          internalType: "string",
          name: "rateType",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "rateScore",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "rateTimestamp",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "rateBy",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "durians",
      outputs: [
        {
          internalType: "enum DurianGuard.State",
          name: "dState",
          type: "uint8",
        },
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
        {
          internalType: "string",
          name: "durianType",
          type: "string",
        },
        {
          internalType: "uint16",
          name: "weightInGram",
          type: "uint16",
        },
        {
          internalType: "uint8",
          name: "sellingPrice",
          type: "uint8",
        },
        {
          components: [
            {
              internalType: "string",
              name: "farmName",
              type: "string",
            },
            {
              internalType: "address",
              name: "farmAddress",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "tree",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "harvestedTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "outToDistributorTimestamp",
              type: "uint256",
            },
          ],
          internalType: "struct DurianGuard.HarvestInfo",
          name: "harvestInfo",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "string",
              name: "distributorName",
              type: "string",
            },
            {
              internalType: "address",
              name: "distributorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "sentToDistributorTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "distributedTimestamp",
              type: "uint256",
            },
          ],
          internalType: "struct DurianGuard.DistributionInfo",
          name: "distributionInfo",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "string",
              name: "retailerName",
              type: "string",
            },
            {
              internalType: "address",
              name: "retailerAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "retailReceiveTimestamp",
              type: "uint256",
            },
          ],
          internalType: "struct DurianGuard.RetailInfo",
          name: "retailInfo",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "duriansCount",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "farms",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "farms_names",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllDistributors",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllDurians",
      outputs: [
        {
          components: [
            {
              internalType: "enum DurianGuard.State",
              name: "dState",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "durianId",
              type: "string",
            },
            {
              internalType: "string",
              name: "durianType",
              type: "string",
            },
            {
              internalType: "uint16",
              name: "weightInGram",
              type: "uint16",
            },
            {
              internalType: "uint8",
              name: "sellingPrice",
              type: "uint8",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "farmName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "farmAddress",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "tree",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "harvestedTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "outToDistributorTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.HarvestInfo",
              name: "harvestInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "distributorName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "distributorAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "sentToDistributorTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "distributedTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.DistributionInfo",
              name: "distributionInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "retailerName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "retailerAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "retailReceiveTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.RetailInfo",
              name: "retailInfo",
              type: "tuple",
            },
          ],
          internalType: "struct DurianGuard.Durian[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllRetailers",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
      ],
      name: "getDurianRating",
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "enum DurianGuard.State",
                  name: "dState",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "durianId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "durianType",
                  type: "string",
                },
                {
                  internalType: "uint16",
                  name: "weightInGram",
                  type: "uint16",
                },
                {
                  internalType: "uint8",
                  name: "sellingPrice",
                  type: "uint8",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "farmName",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "farmAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint8",
                      name: "tree",
                      type: "uint8",
                    },
                    {
                      internalType: "uint256",
                      name: "harvestedTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "outToDistributorTimestamp",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct DurianGuard.HarvestInfo",
                  name: "harvestInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "distributorName",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "distributorAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "sentToDistributorTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "distributedTimestamp",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct DurianGuard.DistributionInfo",
                  name: "distributionInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "retailerName",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "retailerAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "retailReceiveTimestamp",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct DurianGuard.RetailInfo",
                  name: "retailInfo",
                  type: "tuple",
                },
              ],
              internalType: "struct DurianGuard.Durian",
              name: "durian",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "rateType",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "rateScore",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "rateTimestamp",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "rateBy",
              type: "address",
            },
          ],
          internalType: "struct DurianGuard.Rating[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "owning_durian",
      outputs: [
        {
          internalType: "enum DurianGuard.State",
          name: "dState",
          type: "uint8",
        },
        {
          internalType: "string",
          name: "durianId",
          type: "string",
        },
        {
          internalType: "string",
          name: "durianType",
          type: "string",
        },
        {
          internalType: "uint16",
          name: "weightInGram",
          type: "uint16",
        },
        {
          internalType: "uint8",
          name: "sellingPrice",
          type: "uint8",
        },
        {
          components: [
            {
              internalType: "string",
              name: "farmName",
              type: "string",
            },
            {
              internalType: "address",
              name: "farmAddress",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "tree",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "harvestedTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "outToDistributorTimestamp",
              type: "uint256",
            },
          ],
          internalType: "struct DurianGuard.HarvestInfo",
          name: "harvestInfo",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "string",
              name: "distributorName",
              type: "string",
            },
            {
              internalType: "address",
              name: "distributorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "sentToDistributorTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "distributedTimestamp",
              type: "uint256",
            },
          ],
          internalType: "struct DurianGuard.DistributionInfo",
          name: "distributionInfo",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "string",
              name: "retailerName",
              type: "string",
            },
            {
              internalType: "address",
              name: "retailerAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "retailReceiveTimestamp",
              type: "uint256",
            },
          ],
          internalType: "struct DurianGuard.RetailInfo",
          name: "retailInfo",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ratings",
      outputs: [
        {
          components: [
            {
              internalType: "enum DurianGuard.State",
              name: "dState",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "durianId",
              type: "string",
            },
            {
              internalType: "string",
              name: "durianType",
              type: "string",
            },
            {
              internalType: "uint16",
              name: "weightInGram",
              type: "uint16",
            },
            {
              internalType: "uint8",
              name: "sellingPrice",
              type: "uint8",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "farmName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "farmAddress",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "tree",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "harvestedTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "outToDistributorTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.HarvestInfo",
              name: "harvestInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "distributorName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "distributorAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "sentToDistributorTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "distributedTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.DistributionInfo",
              name: "distributionInfo",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "retailerName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "retailerAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "retailReceiveTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct DurianGuard.RetailInfo",
              name: "retailInfo",
              type: "tuple",
            },
          ],
          internalType: "struct DurianGuard.Durian",
          name: "durian",
          type: "tuple",
        },
        {
          internalType: "string",
          name: "rateType",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "rateScore",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "rateTimestamp",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "rateBy",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "retailers",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "retailers_names",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const Address = "0x6534546F6213a8E62b531dB1D64B8CE8b3a7ffD6";
  window.web3 = await new Web3(window.ethereum); //how to access to smart contract
  window.contract = await new window.web3.eth.Contract(ABI, Address); //how you create an instance of that contract by using the abi and address
  console.log("connected to smart contract");
};

accessToContract();

const register = async () => {
  const role = document.getElementById("userrole").value;
  const name = document.getElementById("username").value;

  event.preventDefault();
  console.log(role);
  if (role !== "Customer") {
    const tx = await window.contract.methods
      .registerRole(name, role)
      .send({ from: curAcc })
      .catch((err) => console.error(err.message));
    console.log("In Register");
    console.log("HI" + tx.transactionHash);

    const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
	console.log(receipt);
    if (receipt.status === true) {
      alert("Registered successfully");
	  switch(role) {
			case "Farm":
            window.location.href = "farmer.html";
            break;
          case "Distributor":
            window.location.href = "distributor.html";
            break;
          case "Retailer":
            window.location.href = "retailer.html";
            break;
	  }
    } else {
      alert("There is something wrong with the registration");
    }
  } else {
	window.location.href = "consumer.html";
  }
};

const getMyDurians = async () => {
  const data = await window.contract.methods.getAllDurians().call();
  console.log(data);
  // Define an empty list to store the matching objects
  const matchingObjects = [];
  // Loop through the data array and check for matching ids
  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    if (obj.harvestInfo.farmAddress.toLowerCase() === currentAd.toLowerCase()) {
      // This id has already been processed, add the object to the matching list
      matchingObjects.push(obj);
    }
  }
  console.log(matchingObjects);
};

const getRetailers = async () => {
  const data = await window.contract.methods.getAllRetailers().call();
  console.log(data);
};

const getDistributors = async () => {
  const data = await window.contract.methods.getAllDistributors().call();
  console.log(data);
  return data;
};

// //3-read data from smart contract
// const readfromContract = async () => {
//   const data = await window.contract.methods.getInitialProduct().call();
//   document.getElementById(
//     "ownerProduct"
//   ).innerHTML = `Owner Product information:<br> Product Name: ${data[0]},<br> Price(wei): ${data[1]} <br>Owner Address: ${data[2]}`;
//   document.getElementById("dataArea0").innerHTML = data[0];
//   document.getElementById("dataArea1").innerHTML = data[1];
//   document.getElementById("dataArea2").innerHTML = data[2];
// };

// //4- buyer buy the product, transfer wei, update the ownership
// const BuyerBuyProduct = async () => {
//   //need to retrieve product data from the contract
//   const data = await window.contract.methods.getInitialProduct().call();
//   const price = data[1];
//   const ownerAddress = data[2];
//   await window.contract.methods
//     .buyProduct(ownerAddress)
//     .send({ from: account, value: price });
// };

// //5- set new product- product name and price, owner address
// const setNewProduct = async () => {
//   const ProductName = document.getElementById("Pname").value;
//   const ProductPrice = document.getElementById("Pprice").value;
//   await window.contract.methods
//     .setProduct(ProductName, ProductPrice)
//     .send({ from: account });
//   document.getElementById("Pname").value = "";
//   document.getElementById("Pprice").value = "";
// };
