import { ChainId, Token, Fetcher } from '@uniswap/sdk'

const chainId = ChainId.RINKEBY

let ETH: Token
let WETH: Token
let DAI: Token

const getETH = async () => {
  const tokenAddress = '0x11D634457F99595aBE7B582739fd52b7ed48995A' // ETH token addres
  ETH = await Fetcher.fetchTokenData(chainId, tokenAddress, undefined, 'ETH', 'Ether')
  console.log(ETH)
}

const getWETH = async () => {
  const tokenAddress = '0xDf032Bc4B9dC2782Bb09352007D4C57B75160B15'
  WETH = await Fetcher.fetchTokenData(chainId, tokenAddress, undefined, 'WETH', 'Wrapped Ether')
  console.log(WETH)
}

const getDAI = async () => {
  const tokenAddress = '0x0165b733e860b1674541BB7409f8a4743A564157'
  DAI = await Fetcher.fetchTokenData(chainId, tokenAddress, undefined, 'DAI', 'Dai Stablecoin')
  console.log(DAI)
}

getETH()
getWETH()
getDAI()