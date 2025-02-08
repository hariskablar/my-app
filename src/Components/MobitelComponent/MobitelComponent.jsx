import classes from './MobitelComponent.module.css';
import React from 'react';

function MobitelComponent({ deviceData }) {
  console.log(deviceData);
  const {
    slika,
    akcija,
    uređaj,
    model,
    cijena,
    qr,
    garancija,
    memorija,
    procesor,
    kamera,
    baterija,
    'extra m - puni iznos': extraMPuniIznos,
    'extra m - rata': extraMRata,
    'extra l - puni iznos': extraLPuniIznos,
    'extra l - rata': extraLRata,
    'extra premium - puni iznos': extraPremiumPuniIznos,
    'extra premium - rata': extraPremiumRata,
    'moja tv phone - puni iznos': mojaTvPhonePuniIznos,
    'moja tv phone - rata': mojaTvPhoneRata,
    'moja tv nets - puni iznos': mojaTvNetsPuniIznos,
    'moja tv nets - rata': mojaTvNetsRata,
    'moja tv fulls - puni iznos': mojaTvFullsPuniIznos,
    'moja tv fulls - rata': mojaTvFullsRata,
    'veličina ekrana': velicinaEkrana,
    'operativni sistem': operativniSistem,
  } = deviceData;
  return (
    <div className={classes['device-wrapper']}>
      <div className={classes['device-container']}>
        <div className={classes['image-container']}>
          <img src={slika} alt='slika' />
          {akcija === 'TRUE' ? (
            <div className={classes['sticker']}>
              <img src='/akcija-sticker.svg' alt='sticker' />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={classes['device-content']}>
          <p className={classes['device-title']}>{uređaj}</p>
          <p className={classes['device-model']}>{model}</p>
          <div className={classes['device-price-container']}>
            <div className={classes['device-price-table']}>
              <div className={classes['table-header']}>
                <div
                  className={`
                ${classes['bht-bg']} ${classes['strong-text']}`}
                >
                  <span>CIJENA</span>
                </div>
                <div
                  className={`
                ${classes['bht-bg']} ${classes['strong-text']} ${classes['right-align']}`}
                >
                  <span>{cijena}</span>
                </div>
              </div>
              <div className={classes['table-subheader']}>
                <div
                  className={`
                ${classes['black-bg']} ${classes['strong-text']}`}
                >
                  <span>PAKET</span>
                </div>
                <div
                  className={`
                ${classes['black-bg']} ${classes['strong-text']} ${classes['center-text']}`}
                >
                  <span>PUNI IZNOS</span>
                </div>
                <div
                  className={`
                ${classes['black-bg']} ${classes['strong-text']} ${classes['center-text']}`}
                >
                  <span>MJESEČNA RATA</span>
                </div>
              </div>
              <div className={classes['table-row']}>
                <div className={classes['bht-bg']}>
                  <span>EXTRA M</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{extraMPuniIznos}</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{extraMRata}</span>
                </div>
              </div>
              <div className={classes['table-row']}>
                <div className={classes['bht-bg']}>
                  <span>EXTRA L</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{extraLPuniIznos}</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{extraLRata}</span>
                </div>
              </div>
              <div className={classes['table-row']}>
                <div className={classes['bht-bg']}>
                  <span>EXTRA PREMIUM</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{extraPremiumPuniIznos}</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{extraPremiumRata}</span>
                </div>
              </div>
              <div className={classes['table-row']}>
                <div className={classes['bht-bg']}>
                  <span>Moja Phone</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{mojaTvPhonePuniIznos}</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{mojaTvPhoneRata}</span>
                </div>
              </div>
              <div className={classes['table-row']}>
                <div className={classes['bht-bg']}>
                  <span>Moja TV Net S</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{mojaTvNetsPuniIznos}</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{mojaTvNetsRata}</span>
                </div>
              </div>
              <div className={classes['table-row']}>
                <div className={classes['bht-bg']}>
                  <span>Moja TV Full S</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{mojaTvFullsPuniIznos}</span>
                </div>
                <div
                  className={`
                ${classes['white-bg']} ${classes['center-text']}`}
                >
                  <span>{mojaTvFullsRata}</span>
                </div>
              </div>
            </div>
            <div className={classes['qr-code-container']}>
              <img
                className={classes['scan-title']}
                src='/skeniraj-i-kupi.svg'
                height='200'
                width='200'
                alt='slika'
              />
              <img
                className={classes['qr-code']}
                src={qr}
                height='200'
                width='200'
                alt='slika'
              />
            </div>
          </div>
          <div className={classes['device-info-container']}>
            <div className={classes['device-table-header']}>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>GARANCIJA</span>
              </div>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>VELIČINA EKRANA</span>
              </div>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>OPERATIVNI SISTEM</span>
              </div>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>MEMORIJA</span>
              </div>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>PROCESOR</span>
              </div>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>KAMERA</span>
              </div>
              <div
                className={`
                ${classes['black-bg']} ${classes['light-text']} ${classes['center-text']}`}
              >
                <span>BATERIJA</span>
              </div>
            </div>
            <div className={classes['device-table-content']}>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{garancija}</span>
              </div>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{velicinaEkrana}</span>
              </div>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{operativniSistem}</span>
              </div>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{memorija}</span>
              </div>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{procesor}</span>
              </div>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{kamera}</span>
              </div>
              <div
                className={`
                ${classes['white-bg']} ${classes['center-text']}`}
              >
                <span>{baterija}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobitelComponent;
