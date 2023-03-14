# Build the frontend Buy Me A Coffee website dapp

For this website portion, in order to keep things simple and clean, we are going to use an amazing tool for spinning up demo projects quickly, called Replit IDE.

Visit my example project here, and fork it to create your own copy to modify:
https://replit.com/@thatguyintech/BuyMeACoffee-Solidity-DeFi-Tipping-app

![](https://i.imgur.com/xFg5vWh.png)

You can also view the full website code here:
https://github.com/itachi-eth/buy-me-a-coffee

After forking the repl, you should be taken to an IDE page where you can:

- See the code of a Next.js web application built with typescript
- Get access to a console, a terminal shell, and a preview of the README.md file
- View a hot-reloading version of your dapp

It should look like this:


### Prerequisites:
To run the website locally, you need to have:
- yarn (recommended) or node
- node (version >=12.22.0)

### Clone the repo:
```
git clone https://github.com/itachi-eth/buy-me-a-coffee.git
```
Here are the changes we need to make before running the code locally:

- Update the buyMeACoffee in config/constants/index.ts

### Run the code locally
```
yarn install
yarn run dev
``` 
Now let's take a tour through the website and the code. You can see the (website)[http://localhost:3000] that when you first visit the dapp. The first time you visit, you will not be connected, so a button will appear asking you to Connect your wallet.

After you click Connect your wallet, a dialog window will pop up asking which wallet you want to connect (argentx/braavos).

Once you approve the connection the website will acknowledge your connection and you will be able to fill in the coffee form.

The first time user needs to approve the contract before submitting the coffee form. Once the user approve the contract, there is no need to approve it at the next time. Then you will be able to sumbit your name and messages. 

Once the transaction has been approved, you will get the final receipts.

### Ending

BOOM! That's it! That's the whole project. Take a second to pat yourself on the back and reflect on the journey you've been on :relaxed: 