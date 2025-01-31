import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.svg' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.svg'
            />

            <link rel='manifest' href='/manifest.json' />

            {/* Google Fonts */}
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
              rel='preconnect'
              href='https://fonts.gstatic.com'
              crossOrigin='true'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
              rel='stylesheet'
            />
          </Head>

          <body>
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
