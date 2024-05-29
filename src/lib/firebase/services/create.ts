import {addDoc, collection} from 'firebase/firestore';
import { firestore } from '..';

function createCondomínio() {
    const doc = addDoc(collection(firestore, 'condominios'), {})
}