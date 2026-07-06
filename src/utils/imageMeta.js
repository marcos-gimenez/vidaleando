const imageSizes = {
  '2025/07/IMG-20211119-WA0050.jpg': [1600, 1059],
  '2025/07/IMG-20211122-WA0014.jpg': [1600, 1059],
  '2025/07/IMG-20211125-WA0021.jpg': [1600, 1059],
  '2025/07/IMG_0750.jpg': [1080, 1080],
  '2025/07/IMG_0753.jpg': [1080, 1056],
  '2025/07/IMG_0754.jpg': [1080, 1069],
  '2025/07/IMG_0755.jpg': [1080, 1057],
  '2025/07/IMG_0815.jpg': [1080, 1080],
  '2025/07/IMG_0816.jpg': [1080, 1080],
  '2025/07/IMG_0819.jpg': [1080, 1080],
  '2025/07/logo-20.png': [783, 618],
  '2025/07/portada-nati-1.jpg': [1080, 1080],
  '2025/08/Obra-La-Pausa-01-1.webp': [1000, 667],
  '2025/08/Obra-La-Pausa-04.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-06.webp': [1000, 562],
  '2025/08/Obra-La-Pausa-07-1-1.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-08.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-10.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-15.webp': [1000, 1000],
  '2025/08/Obra-La-Pausa-20.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-23.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-24.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-26.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-27.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-28.webp': [1000, 562],
  '2025/08/Obra-La-Pausa-31.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-32.webp': [1000, 562],
  '2025/08/Obra-La-Pausa-34.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-36.webp': [800, 1000],
  '2025/08/Obra-La-Pausa-37.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-40.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-43.webp': [800, 1000],
  '2025/08/Obra-La-Pausa-44.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-48.webp': [1000, 666],
  '2025/08/Obra-La-Pausa-50.webp': [800, 1000],
  '2025/08/Obra-La-Pausa-53.webp': [1000, 562],
  '2025/08/Obra-La-Pausa-54.webp': [828, 635],
  '2025/08/Talleres_1.webp': [1000, 667],
  '2025/08/WhatsApp.png': [512, 513],
  '2025/09/Ensayo-01.jpeg': [1280, 720],
  '2025/09/Ensayo02.jpeg': [1280, 720],
  '2025/09/portada-danzateatro-02.webp': [1050, 630],
  '2025/09/portada-danzateatro-03.webp': [1000, 667],
  '2025/09/portada-danzateatro-04.webp': [1000, 667],
  '2025/09/portada-danzateatro-05.webp': [1440, 960],
  '2025/09/portada-danzateatro-07.webp': [1200, 718],
  '2025/11/01-talleres-danza.webp': [1000, 763],
  '2025/11/03-talleres-danza.webp': [682, 1000],
  '2025/11/04-talleres-danza.webp': [666, 1000],
  '2025/11/05-talleres-danza.webp': [1280, 769],
  '2025/11/06-talleres-danza.webp': [1106, 1280],
  '2025/11/07-talleres-danza.webp': [964, 1280],
  '2025/11/08-talleres-danza.webp': [675, 900],
  '2025/11/09-talleres-danza.webp': [900, 698],
  '2025/11/10-talleres-danza.webp': [675, 900],
  '2025/11/11-talleres-danza.webp': [600, 800],
  '2025/11/12-talleres-danza.webp': [600, 800],
  '2025/11/13-talleres-danza.webp': [600, 800],
  '2025/11/14-talleres-danza.webp': [600, 800],
  '2025/11/15-talleres-danza.webp': [525, 700],
  '2025/11/17-talleres-danza.webp': [660, 700],
  '2025/11/18-talleres-danza.webp': [528, 700],
  '2025/11/20-talleres-danza.webp': [549, 700],
  '2025/11/21-talleres-danza.webp': [450, 800],
  '2025/11/16-anonimas_2.webp': [1000, 667],
  '2025/11/25-anonimas_2.webp': [1000, 668],
  '2025/11/45_circo_criollo.webp': [1280, 853],
  '2025/11/49-anonimas.webp': [1000, 667],
  '2025/11/instagram.png': [400, 400],
  '2025/12/01-poesia-1.webp': [776, 822],
  '2025/12/01-poesia-2.webp': [735, 822],
  '2025/12/02-768x768-1.png': [263, 263],
  '2025/12/02-bailamos-historias-1.webp': [804, 854],
  '2025/12/02-bailamos-historias-2.webp': [774, 854],
  '2025/12/03-soy-vidalera-1.webp': [660, 698],
  '2025/12/03-soy-vidalera-2.webp': [634, 698],
  '2025/12/04-pena-de-amigxs-1.webp': [798, 838],
  '2025/12/04-pena-de-amigxs-2.webp': [768, 838],
  '2025/12/05-pena-de-amigxs-3-.webp': [798, 840],
  '2025/12/05-pena-de-amigxs-4-.webp': [781, 840],
  '2025/12/Patrocinio-1.webp': [600, 600],
  '2025/12/Patrocinio-2.webp': [600, 600],
  '2025/12/portada-ropa.webp': [1251, 652]
}

const numberFromPath = (path, suffix) => {
  const match = path.match(new RegExp(`2025/11/(\\d+)-${suffix}\\.webp$`))
  return match ? Number(match[1]) : null
}

const inferredSize = (path) => {
  const fileSize = path.match(/-(\d+)x(\d+)\.(?:jpe?g|png|webp)$/i)
  if (fileSize) return [Number(fileSize[1]), Number(fileSize[2])]

  const anonimas = numberFromPath(path, 'anonimas')
  if (anonimas !== null) {
    if (anonimas === 7) return [1000, 665]
    if (anonimas === 15) return [667, 1000]
    if (anonimas >= 1 && anonimas <= 20) return [1000, 667]
  }

  const anonimas2 = numberFromPath(path, 'anonimas_2')
  if (anonimas2 !== null && anonimas2 >= 52 && anonimas2 <= 71) {
    if ([56, 62, 64, 68].includes(anonimas2)) return [668, 1000]
    if ([53, 54].includes(anonimas2)) return [1000, 667]
    return [1000, 668]
  }

  return null
}

export const imageAttrs = (path) => {
  const size = imageSizes[path] || inferredSize(path)
  return size ? { width: size[0], height: size[1] } : {}
}
