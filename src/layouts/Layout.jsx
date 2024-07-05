import { useEffect } from 'react';
import { ViewTransitions } from 'astro:transitions';
import './layout.css';
import SideMenu from '../components/Side/SideMenu';

interface Props {
  title: string;
  image?: string;
}

const Layout = ({ title = 'Home', image = 'https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_2_f9ymlx.jpg' }: Props) => {
  useEffect(() => {
    function setContainerColor(dataColor: string | null) {
      const playlistContainer = document.getElementById('playlist-container');
      const currentColor = playlistContainer?.getAttribute('data-color');
      if (dataColor && dataColor !== currentColor) {
        playlistContainer?.style.setProperty('--context-color', dataColor);
        playlistContainer?.setAttribute('data-color', dataColor);
      }
    }

    let coloradTimeout: NodeJS.Timeout | null = null;
    for (const playlist of document.querySelectorAll('.playlist-item')) {
      playlist.addEventListener('mouseover', () => onMouseOverColorad(playlist));
      playlist.addEventListener('mouseout', onMouseOutColorad);
      playlist.addEventListener('focus', () => onMouseFocusColorad(playlist));
      playlist.addEventListener('blur', onMouseOutColorad);
    }

    function onMouseFocusColorad(el: HTMLElement) {
      if (el) {
        const dataColor = el.getAttribute('data-color');
        if (!dataColor) return;
        setContainerColor(dataColor);
      }
    }

    function onMouseOverColorad(el: HTMLElement) {
      if (el) {
        const dataColor = el.getAttribute('data-color');
        if (!dataColor) return;
        coloradTimeout = setTimeout(() => setContainerColor(dataColor), 200);
      }
    }

    function onMouseOutColorad() {
      if (coloradTimeout) {
        clearTimeout(coloradTimeout);
        coloradTimeout = null;
      }
    }

    if (!document.startViewTransition) {
      const notSupportElement = document.getElementById('not-support');
      if (notSupportElement) {
        notSupportElement.classList.remove('hidden');
      }
    }

    document.addEventListener('astro:page-load', () => {
      const elementsToFade = document.querySelectorAll('.el-to-fade');
      elementsToFade.forEach((el) => el.classList.remove('scale-90'));
    });

    return () => {
      for (const playlist of document.querySelectorAll('.playlist-item')) {
        playlist.removeEventListener('mouseover', () => onMouseOverColorad(playlist));
        playlist.removeEventListener('mouseout', onMouseOutColorad);
        playlist.removeEventListener('focus', () => onMouseFocusColorad(playlist));
        playlist.removeEventListener('blur', onMouseOutColorad);
      }
    };
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Clone of Spotify with Astro View Transitions integration for fluid navigation" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="generator" content={Astro.generator} />
        <title>{title} | Quick POD</title>
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
        <ViewTransitions fallback="none" />
      </head>
      <body className="dark">
        <div className="relative h-screen gap-2 flex items-stretch">
          <div className="rounded-lg bg-black flex-1 mx-auto overflow-y-auto">
            <slot />
          </div>
        </div>
        <div id="not-support" className="fixed hidden bg-red-700 bottom-0 inset-x-0 rounded-t-md text-center py-2 lg:py-4 z-50 font-semibold">
          It seems your browser does not support view transitions yet :( try it using chrome or edge{' '}
          <a className="underline" href="https://github.com/igorm84/spotify-astro-transitions">
            (see docs here)
          </a>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function setContainerColor(dataColor) {
                const playlistContainer = document.getElementById('playlist-container');
                const currentColor = playlistContainer?.getAttribute('data-color');
                if (dataColor && dataColor !== currentColor) {
                  playlistContainer?.style.setProperty('--context-color', dataColor);
                  playlistContainer?.setAttribute('data-color', dataColor);
                }
              }

              let coloradTimeout = null;
              for (const playlist of document.querySelectorAll('.playlist-item')) {
                playlist.addEventListener('mouseover', () => onMouseOverColorad(playlist));
                playlist.addEventListener('mouseout', onMouseOutColorad);
                playlist.addEventListener('focus', () => onMouseFocusColorad(playlist));
                playlist.addEventListener('blur', onMouseOutColorad);
              }

              function onMouseFocusColorad(el) {
                if (el) {
                  const dataColor = el.getAttribute('data-color');
                  if (!dataColor) return;
                  setContainerColor(dataColor);
                }
              }
              function onMouseOverColorad(el) {
                if (el) {
                  const dataColor = el.getAttribute('data-color');
                  if (!dataColor) return;
                  coloradTimeout = setTimeout(() => setContainerColor(dataColor), 200);
                }
              }
              function onMouseOutColorad() {
                if (coloradTimeout) {
                  clearTimeout(coloradTimeout);
                  coloradTimeout = null;
                }
              }

              if (!document.startViewTransition) {
                document.getElementById('not-support').classList.remove('hidden');
              }
              document.addEventListener('astro:page-load', () => {
                for (const el of document.querySelectorAll('.el-to-fade')) {
                  el.classList.remove('scale-90');
                }
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.startViewTransition) {
                document.getElementById('not-support').classList.remove('hidden');
              }
              document.addEventListener('astro:page-load', () => {
                for (const el of document.querySelectorAll('.el-to-fade')) {
                  el.classList.remove('scale-90');
                }
              });
            `,
          }}
        />
      </body>
    </>
  );
};

export default Layout;
