import { type Firestore, collection, CollectionReference, onSnapshot, type Query } from 'firebase/firestore';

export function collectionStore<T>(
    firestore: Firestore,
    ref: string | CollectionReference<T> | Query<T>,
    startWith: T[] = []
) {
    let unsubcribe: () => void;

    const colRef = typeof ref === 'string' ? collection(firestore, ref): ref;

    const data = $state(startWith);

    

    console.log(data);
    
}