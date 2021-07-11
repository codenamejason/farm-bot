
import { ethers } from "ethers";



const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.infura.io/v3/d2854a26847b4d828fae0793e83d7ab7");


// const init = async () => {
// 	const dai = await Fetcher.fetchTokenData(chainId, tokenAddress, customHttpProvider);
// 	const weth = WETH[chainId];
// 	const pair = await Fetcher.fetchPairData(dai, weth, customHttpProvider);
// 	const route = new Route([pair], weth);
// 	const trade = new Trade(route, new TokenAmount(weth, '100000000000000000'), TradeType.EXACT_INPUT);
// 	console.log("Mid Price WETH --> DAI:", route.midPrice.toSignificant(6));
// 	console.log("Mid Price DAI --> WETH:", route.midPrice.invert().toSignificant(6));
// 	console.log("-".repeat(45));
// 	console.log("Execution Price WETH --> DAI:", trade.executionPrice.toSignificant(6));
// 	console.log("Mid Price after trade WETH --> DAI:", trade.nextMidPrice.toSignificant(6));
// }