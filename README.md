# Decubate project specifics / info
I will use this template of mine to get started quickly. Normally I use this template to interact with smart contract on the ICON Blockchain, which are written in Java. But I also started on implementing evm compatiblity (ethers.js). So I will try and take all the non-evm out of it but there might be some leftover code floating around, which I guess is not a huge problem in this particular case.

Also, whenever you see 'Qnect' poppin up, that is some template stuff I created to interact with the ICON Blockchain. 

## NFTs
Another guess is that it won't be an issue to reuse an existing IPFS folder/files of a project of mine, I am assuming that it's more important to show that I can implement the NFTs in the project, rather than to show that I can create a new IPFS folder and upload the files to IPFS. 

_fyi: The project I'm taking the IPFS files from is www.idogelabs.com (I'm the creator of that project, which is live on the ICON Blockchain)_

Minting is done with test BUSD tokens. The tokens are being transfered to the owner of the contract.

## Solidity
For ease of use I included the nft solidity contract I used for this project [here](./solidity/nftcontract.sol) . It was quicker for me to just deploy the contract using remix instead of my local environment. I used open-zeppelin for the base erc721 contract and added some custom functions. Seemed overkill to create a separate repo for this contract.


### From this point on it is the original README.md of the template I created for my own use.

# web3 nextjs template

This is a template for a web3 project using nextjs. It is a template for a project that uses the following technologies:

- nextjs13
- typescript
- tailwindcss
- ethersjs 5.4
- framer motion
- qnect 
- headlessui/react
- heroicons/react

## How to set up this template

1. git clone the repo to your local machine, to rename the name of the folder, use the following command:

    git clone link_to_repo <new_folder_name>

2. CD into the folder and Run the init_script.py script with sudo on linux, and as administrator on windows (I think you can right-click the cmd-prompt in your windows menu and choose 'run as administrator'). 

3. Create a new Github repository, and follow the 'or push an existing repository from the command line' instructions to set the Github repo
as the remote repo that is linked to the local project you just created using this template. 

The github instructions for this are:

`git remote add origin https://github.com/yourname/test_examplee-blabla.git`

`git branch -M main`

`git push -u origin main`


This will likely give you some git error when trying to 'git push', force the push by adding -f. So:

`git push -u -f origin main`

Now the local project/repo is linked to the repo on your Github.

## app/layout.tsx
Comment out the `QNectHandler` component from the layout, if you don't want to use qnect.

## Custom fonts
I don't know anymore how I added the custom Google font, I can't find where I import it... But I use it
in the tailwind.config.js file. I believe I import it somewhere in a header, not sure where.

## Structure
As example there are lottery-components in the project. You can delete them, or keep them as an example.
This might be useful to see how to use the custom Qnect components and hooks.

/app contains the pages, some components, and the "global" layout.tsx file,
/components contains most components, 
/hooks can be used to store custom hooks,
/utils/constants to store constants,
/utils/context contains the global context! ! Important !
/utils/contracts for icon -> store enums here for each contract containing all functions,
for evm -> store the abi's here,
/utils/qnect contains the qnect components and hooks, also a formataddress function that might be useful,
