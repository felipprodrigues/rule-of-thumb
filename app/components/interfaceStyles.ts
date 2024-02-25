export const sharedStyles =  {
  footer: 'w-full absolute flex items-center bottom-0',
  actionButtonParagraph: 'font-bold text-white xl:text-base md:text-xs'
}

export const listStyles = {
  componentHolder: 'grid xl:grid-cols-[200px,1fr,350px] md:grid-cols-[200px,1fr,200px] w-full justify-center bg-gradient-to-r from-stone-500/80 via-stone-600 to-stone-500/80 gap-x-4 relative xl:min-h-[200px] md:min-h-[175px]',

  descriptionBlock: {
    holder: 'flex flex-col flex-1 pt-2 shadow-left',
    title: 'xl:text-4xl md:text-2xl font-normal text-white',
    paragraph: 'xl:text-lg md:text-sm font-light text-white',
    imageHolder: 'absolute left-0 p-3 flex items-center justify-center'
  },

  mainCardContent: 'w-full h-auto bg-cover max-w-[200px] bg-no-repeat bg-center mix-blend-normal relative',
  actionButtonBlock: 'flex flex-col items-end pt-2 pr-4 xl:gap-2 md:gap-5',

  footerThumbsUpBlock: {
    holder: 'absolute left-0 z-10 p-2 pl-4 flex items-center gap-2',
    span: 'xl:text-lg md:text-base text-sm text-white',
  },
  footerThumbsDownBlock: {
    holder: 'absolute right-0 p-2 pr-4 flex items-center gap-2',
    span: 'xl:text-2xl md:text-xl text-white',
  },
  footerProgress: 'xl:min-h-14 md:min-h-10',
  footerThumbsButton: {
    className: "xl:text-2xl md:text-xl text-base",
    size: 0,
  },
}

export const gridStyles = {
  componentHolder: 'justify-center min-h-[450px] max-h-[450px] md:max-w-full max-w-[400px] bg-cover bg-no-repeat bg-center relative flex items-end',

  descriptionBlock: {
    holder: 'md:h-[135px] h-[120px]',
    title: 'lx:text-4xl md:text-3xl  text-2xl font-normal text-white',
    paragraph: 'lx:text-base text-sm font-light text-white',

    imageHolder: 'absolute left-0 top-[3.5rem] p-1.5 flex items-center justify-center'
  },

  mainCardContent: 'flex flex-col w-full gap-3 pt-12 pb-14 pl-10 pr-10 relative',
  actionButtonBlock: 'flex items-end flex-col gap-3',

  footerThumbsUpBlock: {
    holder: 'text-2xl text-white absolute left-0 z-10 p-2 pl-4 flex items-center font-normal gap-2',
    span: 'xl:text-lg md:text-base text-sm text-white',
  },
  footerThumbsDownBlock: {
    holder: 'absolute right-0 p-2 pr-4 flex items-center gap-2',
    span: 'xl:text-lg md:text-base text-sm text-white',
  },
  footerProgress: 'min-h-10',
  footerThumbsButton: {
    className: "",
    size: 15,
  },
}
