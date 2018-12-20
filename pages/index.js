import 'isomorphic-fetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from 'next/error'

export default class extends React.Component {

    static async getInitialProps({ res }) {
        try {
            let req = await fetch('https://api.audioboom.com/channels/recommended')
            let { body: channels } = await req.json()
            return { channels, statusCode: 200 }

            if ( req.status >= 404 ) {
                res.status = req.status;
                return { channel: null, audioClips: null, series: null, statusCode: req.status }        
            }
        } catch(error) {
            res.statusCode = 503
            return { channels: null, statusCode: 503 }
        }
    }
    
    render() {
        const { channels, statusCode } = this.props;

        if ( statusCode !== 200 ) {
            return <Error statusCode={ statusCode } />
        }

        return <Layout title="VCK PODCAST">
                    <ChannelGrid channels={ channels } />                        
                
                    <style jsx global>{`
                        body {                  
                            margin: 0;      
                            font-family: system-ui;
                            background: white;                        
                        }
                    `}</style>
            </Layout>
    }
}