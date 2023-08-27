/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lotus-red': '#e44650',
        'secondary-blue': '#2B2E4A',
        'secondary-blue-dark' : '#22253D',
      },
      fontFamily: {
        'FamiljenGbi' : ['FamiljenGbi'],
        'ExpletusSans-BoldItalic' : ['ExpletusSans-BoldItalic'],
        'EncodeSansSemiCondensed-ExtraLight' : ['EncodeSansSemiCondensed-ExtraLight'],
        'Inter-SemiBold' : ['Inter-SemiBold'],
        'Montserrat' : ['Montserrat'],
        'OpenSans-LightItalic' : ['OpenSans-LightItalic'],
      },
      backgroundImage: {
        'calculator-bgImage': "url('https://lh6.googleusercontent.com/UIQSCnSJU1hjgH-eBD6dRxErH1uRZxJVkEz9ugcMsVnfLkbsaNpht-d7x6hISEUYAGT8CIUK1Rsw2O1cbnqFVUsXED2-UBMmmlc1rPJ3dAAV0VD3Msu_Xqj74rpNeFF5Dv4vAH83WpVElD7KH-_Hzkrum0dC3UPMKYI5cSVj_9VjPcNbUMMRXFGpulAmwg')",
        'dot-Patern' : "url('https://lh6.googleusercontent.com/K9bhJACQDMp4ZV96IxBS8vSxL6UpuX52pxOd2UyJqk7TlV_hCbbVBw8mRtaM1vaNvaaAQ98_L0iCoFrePOXHhd0GwpUCVAlCKxNfcIOAuT1_qgeLqCQboolpyFpkMEMhmsqdtCjLQ4cSagaGqsv5CLE')",
        'dot-Pattern2' : "url('https://lh3.googleusercontent.com/aW-sVQhpijgxoD99JGS84OckC-qxo4ts7AQNMoom4ImhL2FbRb0owtn5U93md1ZGl2-4xzqr7quPkgRrQoln6cegPSuiXFMAr77aK6_8E0-FNHR-GOzgLfbc__hj5HgvAdhuVcV--wXB5XI1xQrb3Z_WZMwSJy7qFcBio9YMFe4nspVAkAi_GEhkekUZnw')",
        'downloadApp-img1' : "url('https://lh6.googleusercontent.com/nLTfcKAAR5H5dY0G-6yWO0mKH6n20C6VKCC98BhL65wR7TYu5dPV790EEAJllRtIybKICuGJ_cxP4PWcMqsMJcZHwcwf2S4E4kkFJFuUT0SKHJA1uzEYT-hyryuIQvKdwxeHeFWm4XKZv0vYo7Xmq4aOslRUbmMC46R2wcg-h9K6C7XAGqQUG-QLEeZVSw')",
        'downloadApp-img2' : "url('../src/assets/bgredimage.png')",
        'footerBG-img' : "url('https://lh4.googleusercontent.com/PlA3ZGfipmkxs4EhMF19KvicpNII-NZ6wCG9jxOPxBOIC5FKYpZtvWtx8y1fLSxgFJbkwpX0YC2Em742ktc2F2ih51YsAunFMGG9z-EH45VFcYcWPlmPK0h78DCfOx0Gt2tfsW3yOBzVxgwdrew2Epo')",
        'missionBG-img' : "url('https://lh5.googleusercontent.com/Du1Jz1vFILFrzNHsnqCgrLjT_SNUzkiZYkRVqayIv27mmsoiSKsRQFes_mOo6lPjvtw7VMMU5azXSWyHhqTOwiSQXLb3ZaAhGtB_RX2m1cPUPp6WK5ii1kTS67ggVqHk8xG23UxSZ5J4Anxzi3cNoPVFQMWlgmYlUFKtXtN7fn5OtHwPhqD6CKBGyYUzYQ')",
        'contactusBG-img' : "url('https://lh3.googleusercontent.com/8xoTWsjayFBKlMCHPq0tFskD-GEEEQyUVKyadT3t0KUrYqvosFDJhvEsCd9smdD_Reoc264Vr7Kh8x2aTex9rMKTOswrkPj9nY2tU9vbVL6xMgWdkxwiht5pqtXYPrhpxfR244Td7Qt4nf4ts7CV-hNF_UNw2TRSHsItF4199ocGMfncV-xzKrNVMqJFJQ')",
      },
      height: {
        '128': '38.75rem',
      }
    },
  },
  plugins: [],
}

