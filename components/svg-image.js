import React from 'react';
import PropTypes from 'prop-types';

const SvgImage = ({ arr }) => {
  const path = {
    skyscraper:
      'M89.23,195.59V31.47h-15.36v-9.14h-8.92V13.19h-8.89V4.05h-8.13V13.19h-8.89v9.14h-8.92v9.14H13.35V195.59H.27v4.41H104.73v-4.41h-15.5Zm-54.48-47.5h-7.93v-7.93h7.93v7.93Zm0-15.3h-7.93v-7.93h7.93v7.93Zm0-15.27h-7.93v-7.96h7.93v7.96Zm0-15.3h-7.93v-7.96h7.93v7.96Zm0-15.3h-7.93v-7.93h7.93v7.93Zm0-15.3h-7.93v-7.93h7.93v7.93Zm0-15.27h-7.93v-7.96h7.93v7.96Zm5.74-7.96h7.93v7.96h-7.93v-7.96Zm0,15.3h7.93v7.93h-7.93v-7.93Zm0,15.3h7.93v7.93h-7.93v-7.93Zm0,15.27h7.93v7.96h-7.93v-7.96Zm0,15.3h7.93v7.96h-7.93v-7.96Zm0,15.3h7.93v7.93h-7.93v-7.93Zm0,15.3h7.93v7.93h-7.93v-7.93Zm21.6,55.44h-21.6v-40.14h21.6v40.14Zm0-47.5h-7.93v-7.93h7.93v7.93Zm0-15.3h-7.93v-7.93h7.93v7.93Zm0-15.27h-7.93v-7.96h7.93v7.96Zm0-15.3h-7.93v-7.96h7.93v7.96Zm0-15.3h-7.93v-7.93h7.93v7.93Zm0-15.3h-7.93v-7.93h7.93v7.93Zm0-15.27h-7.93v-7.96h7.93v7.96Zm13.7,91.75h-7.96v-7.93h7.96v7.93Zm0-15.3h-7.96v-7.93h7.96v7.93Zm0-15.27h-7.96v-7.96h7.96v7.96Zm0-15.3h-7.96v-7.96h7.96v7.96Zm0-15.3h-7.96v-7.93h7.96v7.93Zm0-15.3h-7.96v-7.93h7.96v7.93Zm0-15.27h-7.96v-7.96h7.96v7.96Z',
    condo:
      'M34.42,103.22h5.14v5.15h-5.14v-5.15Zm0,9.91h5.14v5.14h-5.14v-5.14Zm0,9.91h5.14v5.14h-5.14v-5.14ZM0,200H105v-2.85h-3.62V101.5l-39.87,10.83v84.81h-4.38V92.27L7.99,78.91v118.23H0v2.85ZM43.28,108.37v-5.15h5.15v5.15h-5.15Zm0,4.76h5.15v5.14h-5.15v-5.14Zm25.31,52.45v-4.17h4.17v4.17h-4.17Zm0,3.87h4.17v4.17h-4.17v-4.17Zm7.18,27.69v-19.67h11.37v19.67h-11.37Zm14.38-75.92h4.17v4.17h-4.17v-4.17Zm-7.2,0h4.19v4.17h-4.19v-4.17Zm-7.18,0h4.17v4.17h-4.17v-4.17Zm-7.18,0h4.17v4.17h-4.17v-4.17Zm21.55,8.04h4.17v4.17h-4.17v-4.17Zm-7.2,4.17v-4.17h4.19v4.17h-4.19Zm7.2,3.86h4.17v4.17h-4.17v-4.17Zm-14.38-3.86v-4.17h4.17v4.17h-4.17Zm7.18,3.86h4.19v4.17h-4.19v-4.17Zm7.2,8.04h4.17v4.17h-4.17v-4.17Zm-21.55-16.07h4.17v4.17h-4.17v-4.17Zm7.18,8.03h4.17v4.17h-4.17v-4.17Zm7.18,8.04h4.19v4.17h-4.19v-4.17Zm7.2,8.03h4.17v4.19h-4.17v-4.19Zm-14.38-8.03h4.17v4.17h-4.17v-4.17Zm7.18,8.03h4.19v4.19h-4.19v-4.19Zm7.2,8.04h4.17v4.17h-4.17v-4.17Zm-21.55-24.11h4.17v4.17h-4.17v-4.17Zm14.36,24.11h4.19v4.17h-4.19v-4.17Zm7.2,8.04h4.17v4.17h-4.17v-4.17Zm-21.55-24.11h4.17v4.17h-4.17v-4.17Zm7.18,12.21v-4.19h4.17v4.19h-4.17Zm7.18,11.9h4.19v4.17h-4.19v-4.17Zm-7.18-8.04h4.17v4.17h-4.17v-4.17Zm-7.18-8.04h4.17v4.19h-4.17v-4.19Zm7.18,16.09h4.17v4.17h-4.17v-4.17Zm-41.34-36.52h5.14v5.15h-5.14v-5.15Zm0,9.91h5.14v5.14h-5.14v-5.14Zm0,9.91h5.14v5.14h-5.14v-5.14Zm0,9.91h5.14v5.14h-5.14v-5.14Zm-8.86,9.89h13.99v24.58h-13.99v-24.58Zm-8.86-69.35h5.14v5.15h-5.14v-5.15Zm8.86,0h5.14v5.15h-5.14v-5.15Zm-8.86,9.91h5.14v5.14h-5.14v-5.14Zm8.86,0h5.14v5.14h-5.14v-5.14Zm-8.86,9.91h5.14v5.14h-5.14v-5.14Zm0,9.89h5.14v5.15h-5.14v-5.15Zm8.86-9.89h5.14v5.14h-5.14v-5.14Zm-8.86,19.81h5.14v5.14h-5.14v-5.14Zm0,9.91h5.14v5.14h-5.14v-5.14Zm8.86-19.82h5.14v5.15h-5.14v-5.15Zm-8.86,29.74h5.14v5.14h-5.14v-5.14Zm8.86-19.82h5.14v5.14h-5.14v-5.14Zm0,9.91h5.14v5.14h-5.14v-5.14Zm0,9.91h5.14v5.14h-5.14v-5.14Zm17.71-39.63h5.15v5.14h-5.15v-5.14Zm0,9.89h5.15v5.15h-5.15v-5.15Zm0,9.91h5.15v5.14h-5.15v-5.14Zm0,9.91h5.15v5.14h-5.15v-5.14Zm0,9.91h5.15v5.14h-5.15v-5.14Z',
    office:
      'M9.76,200V62.59h62.24V197.23h.92V75.86h22.32v124.14m-14.43-110.63h6.52v6.52h-6.52v-6.52Zm0,12.56h6.52v6.5h-6.52v-6.5Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52ZM20.79,76.47h6.52v6.52h-6.52v-6.52Zm11.23,0h6.52v6.52h-6.52v-6.52Zm11.21,0h6.52v6.52h-6.52v-6.52Zm11.23,0h6.52v6.52h-6.52v-6.52Zm-33.66,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.56h6.52v6.5h-6.52v-6.5Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm11.23-87.82h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.56h6.52v6.5h-6.52v-6.5Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm11.21-87.82h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.56h6.52v6.5h-6.52v-6.5Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm11.23-87.82h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.56h6.52v6.5h-6.52v-6.5Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Zm0,12.54h6.52v6.52h-6.52v-6.52Z',
    palm: 'M74.77,160.12c.74,1.04,1.95,4.1,1.95,4.1-.29-4.74-4.95-9.69-8.56-10.71,1.33-.44,2.91-.32,2.91-.32l-1.37-.7c-.09-.04-.05-.17,.04-.17l4.13,.2-.77-.64c-.07-.06,0-.18,.08-.15l3.37,1.08-1.1-.83c-.07-.06-.02-.18,.07-.16,1.25,.23,4.25,1.6,4.25,1.6-3.07-2.82-8.02-3.62-11.17-2.65l1.59-1.14-.96-.1,3.19-2.74-1.54,.1,.97-2.74-4.29,5.33-.65-1.17-.32,1.57c-.89-4.62-7.39-10.04-14.21-10.04,0,0,4.33,1.41,5.83,2.35,.11,.07,.05,.24-.08,.23l-1.9-.18,4.46,2.05c.12,.06,.08,.24-.06,.23l-1.38-.07,4.41,3.67c.1,.08,.02,.25-.11,.21l-2.05-.57s1.66,2.51,2.42,4.42c-2.65-3.52-10.73-5.11-16.83-2.48,1.41-11.67,5.18-20.47,6.3-22.92l.07-.13c.15-.32,.28-.63,.39-.94,5.07-1.88,7.2,6.04,7.2,6.04l.08-2.6c0-.16,.23-.2,.29-.05l2.68,6.47,.43-1.64c.04-.16,.27-.15,.29,.02l.78,5.95,.47-2.28c.03-.16,.25-.16,.29,0,.55,2.09,.62,7.66,.62,7.66,2.11-6.78,.02-14.8-3.73-18.87,0-.12,.15-.21,.25-.1l4.8,5.1-.18-1.68c-.02-.16,.2-.23,.28-.09l2.83,5.29-.37-2.3c-.02-.16,.18-.24,.27-.11,1.26,1.76,3.29,6.94,3.29,6.94-.49-8.02-8.37-16.41-14.48-18.12,2.25-.75,4.92-.54,4.92-.54l-2.32-1.18c-.14-.07-.09-.29,.08-.28l7,.34-1.3-1.08c-.13-.11-.02-.31,.14-.26l5.71,1.84-1.86-1.4c-.13-.1-.04-.3,.12-.27,2.12,.39,7.19,2.71,7.19,2.71-5.2-4.77-13.57-6.13-18.9-4.49l2.7-1.94-1.63-.17,5.41-4.64-2.61,.17,1.63-4.64-7.27,9.03-1.1-1.99-.54,2.66c-1.5-7.82-12.52-17-24.05-17,0,0,7.33,2.38,9.87,3.97,.19,.12,.09,.4-.13,.38l-3.22-.31,7.55,3.48c.21,.1,.13,.41-.1,.4l-2.34-.11,7.46,6.21c.17,.14,.03,.42-.19,.36l-3.47-.96s2.81,4.25,4.1,7.49c-4.8-6.37-20.07-9.01-30.55-3.19,0,0,7.57-1.48,10.55-1.32,.22,.01,.27,.31,.07,.4l-2.96,1.29,8.28-.62c.23-.02,.31,.29,.11,.39l-2.1,1.04,9.53,1.81c.22,.04,.23,.35,0,.41l-3.5,.84s3.9,1.43,6.84,3.11c-8.26-1.12-19.36,13.07-18.49,26.37,0,0,1.89-7.47,3.31-10.11,.1-.19,.4-.11,.39,.11l-.1,3.23,2.97-7.76c.08-.21,.4-.16,.4,.07l.04,2.35,5.7-7.85c.13-.18,.42-.05,.37,.16l-.73,3.52s8.15-8.04,10.07-6.29l.05,.07c-21.93,36.8,.58,72.91,.58,72.91h8.78c-15.08-16.6-17.07-35.42-15.39-49.92,1.45-.25,3.87-.63,5.06-.57,.13,0,.16,.18,.04,.24l-1.75,.76,4.89-.37c.13-.01,.18,.17,.06,.23l-1.24,.61,5.63,1.07c.13,.02,.13,.21,0,.24l-2.07,.5s2.3,.85,4.04,1.84c-4.88-.66-11.44,7.72-10.92,15.58,0,0,1.12-4.42,1.96-5.97,.06-.11,.24-.07,.23,.06l-.06,1.91,1.76-4.58c.05-.13,.24-.09,.24,.04l.03,1.39,3.37-4.64c.08-.11,.25-.03,.22,.1l-.43,2.08s4.82-4.75,5.95-3.71l.03,.04c-12.96,21.74,.34,43.07,.34,43.07h5.19c-16.2-17.83-6.83-40.01-5.34-43.26l.04-.08c.09-.19,.17-.37,.23-.56,2.99-1.11,4.25,3.57,4.25,3.57l.05-1.53c0-.1,.13-.12,.17-.03l1.58,3.82,.25-.97c.02-.09,.16-.09,.17,.01l.46,3.51,.28-1.35c.02-.09,.15-.1,.17,0,.33,1.23,.37,4.52,.37,4.52,1.25-4,.01-8.75-2.2-11.15,0-.07,.09-.12,.15-.06l2.84,3.02-.11-1c-.01-.1,.12-.14,.17-.05l1.67,3.12-.22-1.36c-.01-.09,.11-.14,.16-.07Z',
    castle:
      'M95.16,143.9h-3.11v3.63h-3.77v-3.63h-2.83v3.63h-3.77v-3.63h-2.83v3.63h-3.77v-3.63h-3.11v9h2.41v9.06h-11.45v-28.67h6.8l-14.32-14.45v-2.89c1.21-.17,2.42-.5,3.63-1.37,1.5-.89,3.01-2.6,4.51-1.45-1.5-2.13-3.01-1.39-4.51-1.47-1.21,.08-2.42-.37-3.63-.98l-.91-.47v8.63l-14.32,14.45h6.8v28.67h-11.62v-9.06h2.41v-9h-3.11v3.63h-3.77v-3.63h-2.83v3.63h-3.77v-3.63h-2.83v3.63h-3.77v-3.63h-3.11v9h2.41v27.84c2.39-2.06,5.49-3.31,8.88-3.31,2.41,0,4.78,.65,6.84,1.85,1.19-3.58,3.4-6.79,6.35-9.19,3.52-2.86,7.96-4.43,12.51-4.43,7.63,0,14.58,4.42,17.87,11.18,2.83-2.27,6.31-3.5,10-3.5,5.52,0,10.43,2.81,13.31,7.11v-27.56h2.41v-9Zm-1.1,45.13c-.44-7.69-6.82-13.8-14.63-13.8-4.12,0-7.84,1.7-10.5,4.43-2.6-7.07-9.39-12.12-17.37-12.12-8.83,0-16.21,6.18-18.05,14.46-2.1-1.68-4.76-2.69-7.65-2.69-6.77,0-12.25,5.49-12.25,12.25,0,.91,.1,1.8,.29,2.65-4.76,.13-8.99,2.35-11.82,5.78H102.92c-.48-5.18-4.05-9.46-8.86-10.97Zm-64.53-23.5h-6.99v-5.88c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v5.88Zm57.39,0h-6.99v-5.88c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v5.88Zm-28.24-13h-6.99v-12.88c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v12.88Z',
    cottage:
      'M76.81,135.15h-4.26v-12.25h-10.28v12.25H28.19l-19.61,30.25h8.87v34.59h11.64v-24.32h14.97v24.32h43.5v-34.59h8.87l-19.61-30.25Zm-13.27,52.53h-12.51v-12.44h12.51v12.44Zm17.63,0h-12.51v-12.44h12.51v12.44Z',
    barn: 'M102.24,173.45l-7.67-4.78-17.63-30.33c-.28-.49-.69-.86-1.16-1.07l-22.42-9.93s-.03,0-.04-.02c-.04-.02-.08-.03-.13-.05-.04-.01-.07-.03-.11-.04-.04-.01-.08-.02-.12-.03-.04,0-.08-.02-.11-.02-.04,0-.08-.01-.12-.02-.04,0-.08,0-.12-.01-.04,0-.08,0-.12,0s-.08,0-.12,0c-.04,0-.08,0-.12,.01-.04,0-.08,0-.12,.02-.04,0-.08,.02-.11,.02-.04,0-.08,.02-.12,.03-.04,.01-.07,.02-.11,.04-.04,.01-.08,.03-.13,.05-.01,0-.03,0-.04,.02l-22.42,9.93c-.47,.21-.87,.58-1.16,1.07l-17.63,30.33-7.67,4.78c-1.19,.74-1.64,2.47-1,3.86,.44,.96,1.28,1.51,2.16,1.51,.39,0,.78-.11,1.15-.34l7.05-4.39v25.92h28.16v-22.18h24.47v22.18h28.16v-25.92l7.05,4.39c.37,.23,.76,.34,1.15,.34,.87,0,1.72-.55,2.16-1.51,.64-1.39,.19-3.12-1-3.86Zm-61.98-28.6h7.72v9.5h-7.72v-9.5Zm16.75,29.58h-9.04v-14.47h9.04v14.47Zm7.72-20.07h-7.72v-9.5h7.72v9.5Z',
    camper:
      'M96.06,176.51h-.49c-.24,0-.46,.06-.65,.16-.4-1.39-.78-2.16-.78-2.16-.88-.1-1.67-1.57-1.67-1.57l-5.78-10.39c-1.86-1.18-17.35-2.25-17.35-2.25-.69-1.27-2.16-1.27-2.16-1.27H18.46c-1.35,0-2.38,1.87-2.38,1.87h-2.21c-4.7,2.89-5.83,13.48-5.83,13.48-.69,.64-.37,1.61-.37,1.61-.69,7.25,.78,18.33,.78,18.33h9.9c.43,3.21,3.18,5.68,6.51,5.68s6.07-2.47,6.51-5.68h39.51c.43,3.21,3.18,5.68,6.51,5.68s6.07-2.47,6.51-5.68h9.86c1.02-2.69,1.58-5.19,1.85-7.45h.46c.79,0,1.44-.64,1.44-1.44v-7.48c0-.79-.64-1.44-1.44-1.44Zm-56.87-3.48c0,.79-.64,1.44-1.44,1.44H16.39c-.79,0-1.44-.64-1.44-1.44v-5.11c0-.79,.64-1.44,1.44-1.44h21.37c.79,0,1.44,.64,1.44,1.44v5.11Zm26.79,0c0,.79-.64,1.44-1.44,1.44h-21.63c-.79,0-1.44-.64-1.44-1.44v-5.11c0-.79,.64-1.44,1.44-1.44h21.63c.79,0,1.44,.64,1.44,1.44v5.11Zm22.12,1.44h-16.39s-1.86,0-1.86-1.52v-4.8s-.05-1.67,1.86-1.67h15.05l2.7,5.83s1.27,2.16-1.35,2.16Z',
    umbrella:
      'M71.84,161.45c-3.12-5.05-8.44-8.76-14.75-10-1.29-.25-2.62-.4-3.98-.43l-.29-2.29h-.65l-.29,2.29c-.32,0-.64,.02-.95,.04-7.61,.49-14.17,4.55-17.78,10.39-.06,.1-.12,.2-.18,.3v2.6h11.71l1.3-2.6,1.08,2.6h4.77v35.65h1.3v-35.65h4.77l1.08-2.6,1.08,2.6h11.93v-2.6c-.06-.1-.12-.2-.18-.3Z',
  };

  const yPos = {
    0: '20',
    1: '60',
    2: '90',
  };

  const blurAmt = {
    0: 1.8,
    1: 1.2,
    2: 0.0,
  };

  return (
    <svg viewBox='0 0 533 300' role='presentation' className='bg-gray-50'>
      {Object.values(arr).map((buildings) => {
        return buildings.map((building, index) => {
          const { type, color, depth } = building;
          return (
            <g
              key={index}
              style={{
                transform: `translateX(${105 * index + 1}px) translateY(${yPos[depth]}px)`,
                filter: `blur(${blurAmt[depth]}px)`,
              }}
            >
              <path d={path[type]} fill={color} fillRule='evenodd' />
            </g>
          );
        });
      })}
    </svg>
  );
};

SvgImage.propTypes = {
  /** Array of buildings */
  arr: PropTypes.any,
};

export default SvgImage;
