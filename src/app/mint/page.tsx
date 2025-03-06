import ActionButton from "@/components/Buttons/ActionButton"
import NormalButton from "@/components/Buttons/Normal"
import { Icons } from "@/components/Icons/icons"
import { Input } from "@/components/Input/input"
import { Custom } from "@/styles/custom"

const MintPage = () => {

  return (
    <div className={`${Custom.section} xl:p-5 md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px] min-h-screen w-full mx-auto`}>

      <div className="flex flex-col items-center">
        <h1 className={`${Custom.goldgradient} text-3xl xl:text-5xl font-bold max-w-3xl text-center leading-12 xl:leading-16`}>
          Launch Your Token on WSE
        </h1>
        <p className={`${Custom.desc} max-w-2xl`}>Create your own token with institutional-grade standards and
          immediate liquidity on Wall Street Exchange.</p>
      </div>

      <div className="flex flex-col lg:flex-row mt-12 gap-8 items-start">
        <div className="basis-1/2 bg-dark-200 p-6 rounded-3xl flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="text-2xl mb-1">Token Configuration</p>
            <p className={`${Custom.desc} text-start`}>Configure your token’s care parameters</p>
          </div>
          <div className="flex flex-col gap-4">
            <Input label="Token Name" placeholder="e.g., Wall Street Exchange" />
            <Input label="Token Symbol" placeholder="e.g., WSE" />
            <Input label="Category" placeholder="Select Category" />
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionButton name="10,000,000" showIcon={false} />
            <NormalButton name="20,000,000" />
            <NormalButton name="50,000,000" />
            <NormalButton name="100,000,000" />
          </div>
          <div >
            <p>Supply Allocation</p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between">
                <p className={`${Custom.desc}`}>Public Sale (70%)</p>
                <p>7,000,000</p>
              </div>
              <div className="flex justify-between">
                <p className={`${Custom.desc}`}>Liquidity Lock (10%)</p>
                <p>1,000,000</p>
              </div>
              <div className="flex justify-between">
                <p className={`${Custom.desc}`}>WSE Treasury (10%)</p>
                <p>1,000,000</p>
              </div>
              <div className="flex justify-between">
                <p className={`${Custom.desc}`}>Minter Allocation (10%)</p>
                <p>1,000,000</p>
              </div>
            </div>
          </div>

        </div>
        <div className="basis-1/2 bg-dark-200 p-6 rounded-3xl flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="text-2xl mb-1">Token Preview</p>
            <p className={`${Custom.desc} text-start`}>Preview your token before minting</p>
          </div>
          <div>
            <div className="aspect-square bg-gray-400 flex items-center justify-center">
              <Icons.Image />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl mb-1">Fee Breakdown</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col border-b border-dark-50/50 gap-4">
                <div className="flex justify-between">
                  <p className={`${Custom.desc}`}>Base Minting Fee</p>
                  <p>2.0 SOL</p>
                </div>
                <div className="flex justify-between">
                  <p className={`${Custom.desc}`}>Custom Symbol Fee</p>
                  <p>0.2 SOL</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className={``}>Total</p>
                  <p>2.2 SOL</p>
                </div>
              </div>
            </div>


          </div>
          <ActionButton name="Mint Token" className="opacity-15"/>
        </div>
      </div>
    </div >
  )
}

export default MintPage