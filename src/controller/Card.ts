import { CardControllerInterface, CardInterface, CoreInterface, StorageInterface } from "../types";

export class CardController implements CardControllerInterface{
    private storage: StorageInterface;
    constructor(_Core: CoreInterface) {
        this.storage = _Core.store;
    }
    async findAll(): Promise<CardInterface[]> {
        try{
            let storeRes = await this.storage.card.findAll();
            console.log(`Controller: Card: findAll:  Fetched call cards`)
            return storeRes;
        }
        catch(err) {
            console.log(err);
            throw err;
        }
    }
    async create(card: CardInterface): Promise<string> {
        try{
            let storeRes = await this.storage.card.createCard(card);
            console.log(`Controller: Card: create: created card with id ${storeRes}`);
            return storeRes;
        }
        catch(err) {
            console.log(err);
            throw err;
        }
    }
}