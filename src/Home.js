import Container from './Components/Container.js'
import './App.css'

export default function Home () {
    return (
        <>
            <div className=' bg-green-500 w-full h-screen'>
                <Container>
                    <div className=' flex py-[100px]'>
                        <div className=''>
                            <div className=' bg-white h-[100px] w-[100px] mt-3 rounded-lg flex justify-center items-center'>
                                <button>esc</button>
                            </div>
                            <div className=' bg-white h-[400px] w-[100px] mt-2 rounded-lg grid grid-row-5 items-center justify-center'>
                                <div>
                                    <button>asd</button>
                                </div>
                                <div>
                                    <button>asd</button>
                                </div>
                                <div>
                                    <button>asd</button>
                                </div>
                                <div>
                                    <button>asd</button>
                                </div>
                                <div>
                                    <button>asd</button>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-white w-[600px] h-[800px] rounded-lg ml-3'>
                            <div>
                                <div className=' h-[500px] w-[600px]'></div>
                            </div>
                            <div className=' flex justify-center'>
                                <h4 className=' font-semibold text-[30px]'>Muhammad Hilmy Setiawanto</h4>
                            </div>
                            <div className=' flex justify-center'>
                                <h6 className=' text-[20px] text-green-400'>FronEnd Developer</h6>
                            </div>
                        </div>
                        <div className=' ml-3 flex justify-center items-center'>
                            <div className=' bg-white w-[750px] h-[750px] rounded-lg'></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}