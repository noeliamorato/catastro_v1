import React from 'react'
import { ContainerGlobal, DateContainer, Img, InicioSesion, InputContainer, LogoContainer, Titulo } from './styledLogin'

export const Login = () => {
  return (
    <ContainerGlobal>

        <LogoContainer>
          <Img>logo image</Img>
        </LogoContainer>

        <InicioSesion>
          <Titulo>Bienvenidos</Titulo>
          <InputContainer>
            <DateContainer>
              Datos
            </DateContainer>

          </InputContainer>
        </InicioSesion>

    </ContainerGlobal>
  )
}
