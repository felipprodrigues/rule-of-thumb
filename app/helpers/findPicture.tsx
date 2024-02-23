
import elonPicture from '../../public/elon-small.png'
import cristinaPicture from '../../public/cristina-small.png'
import gretaPicture from '../../public/greta-small.png'
import malalaPicture from '../../public/malala-small.png'
import markPicture from '../../public/mark-small.png'
import kanyePicture from '../../public/kanye-small.png'

export function ParsePicture(picture: string | undefined) {
  if(!picture) return null

  switch (picture) {
    case 'elon.png':
      return elonPicture
    case 'cristina.png':
      return cristinaPicture;
    case 'greta.png':
      return gretaPicture;
    case 'malala.png':
      return malalaPicture;
    case 'mark.png':
      return markPicture;
    case 'kanye.png':
      return kanyePicture;
    default:
      return null;
  }
}
