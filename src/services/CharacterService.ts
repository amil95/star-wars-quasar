import axios from 'axios';
import { Character } from '../models/Character';

export default class CharacterService {
  constructor() {
    axios
      .post('https://rickandmortyapi.com/graphql', {
        query: `
                characters(page: 1) {
                  results {
                    name,
                    id,
                  }
                }
               `
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  public static async getCharactersByPage(
    page: number
    // rowsPerPage: number
  ): Promise<{ total: number; characters: Character[] }> {
    let chars: { total: number; characters: Character[] } = {
      total: 0,
      characters: []
    };
    interface queryResult {
      data: {
        data: {
          characters: {
            info: {
              count: number;
            };
            results: Character[];
          };
        };
      };
    }

    // const calculatedPage = page / (20 / rowsPerPage);

    await axios
      .post('https://rickandmortyapi.com/graphql', {
        query: `
               query{
                    characters(page: ${page}) {
                        info {
                          count
                        },
                        results {
                            name,
                            id,
                        }
                    }
                }
               `
      })
      .then(
        (res: queryResult) =>
          (chars = {
            total: res.data.data.characters.info.count,
            characters: res.data.data.characters.results //.splice(rowsPerPage)
          })
      )
      .catch(err => console.error(err));
    return chars;
  }

  // public static getCharacterById(page: number) {}
}
