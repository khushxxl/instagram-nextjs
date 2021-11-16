import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'
const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
        <p className="font-xs italic">Educational Purposes Only</p>
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 text-white p-3 rounded-lg"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
export default signin
