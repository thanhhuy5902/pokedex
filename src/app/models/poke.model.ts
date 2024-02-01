export interface Poke {
  name: string;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
        front_shiny: string;
      };

      showdown: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];

  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}

export interface PokeDetail {
  name: string;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
        front_shiny: string;
      };

      showdown: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
  };
}
