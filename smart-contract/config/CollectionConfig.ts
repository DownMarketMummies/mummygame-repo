import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MummyGameMG',
  tokenName: 'Mummy Game (Beanies Halloween Airdrop)',
  tokenSymbol: 'MG',
  hiddenMetadataUri: 'ipfs://QmYswQaWzBo4nCLwctKVXQXg5QCvAgYK2Amq8Fe88BQf7t/hidden.json',
  maxSupply: 7777,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.0042,
    maxMintAmountPerTx: 31,
  },
  contractAddress: '0xea6da1E3a650A884c757e6713D7CeD2EBa2e02d1',
  marketplaceIdentifier: 'mummy-game',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
