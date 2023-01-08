import { useMemo } from 'react'
import { useStarknetExecute } from '@starknet-react/core'
import addresses from '../config/constants'
import { uint256 } from 'starknet'

const useApprove = () => {
  const amount = uint256.bnToUint256(uint256.UINT_256_MAX)

  const calls = useMemo(() => {
    const tx = {
      contractAddress: addresses.eth,
      entrypoint: 'approve',
      calldata: [addresses.buyMeCoffee, amount.low, amount.high],
    }
    return tx
  }, [amount])

  const { execute: onApprove, error } = useStarknetExecute({ calls })
  return { onApprove, error }
}

export default useApprove
