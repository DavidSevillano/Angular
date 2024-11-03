export class PersonaDto {
    constructor(
      public nombre: string,
      public apellidos: string,
      public NIF: number,
      public email: string,
      public telefono: string,
      public sexo: string,
      public comoCononce: string,
      public contrasenia: string,
      public confirmarContrasenia: string,
      public terminosAceptados: boolean
      ) {}
  }
  