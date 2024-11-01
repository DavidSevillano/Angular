export class PersonaDto {
    constructor(
      public nombre: string,
      public apellidos: string,
      public NIF: number,
      public email: string,
      public contrasenia: string,
      public confirmarContrasenia: string,
      public telefono: string,
      public comoCononce: string,
    ) {}
  }
  