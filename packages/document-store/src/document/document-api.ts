// // const personsCollection = useCollection<Applicants>({path: "form", defaultValue: []});
// // persons.all({});
// // persons.insert({});
// // persons.insertMany([{}]);
// // persons.delete(person => person.id = 0)
// // persons.filter(person => person.id = 0)
// // persons.find(person => person.id = 0)
// // persons.contain(person => person.id = 0)
//
// // persons.stream().filter(person => person.id = 0)
// // persons.stream().find(person => person.id = 0).update(person => {})
// // persons.stream().find(person => person.id = 0).delete(person => {})
//
// // const personsDocument = useDocument<Applicants>({path: "form", defaultValue: []});
// // personsDocument.get({});
// // personsDocument.delete()
// // personsDocument.update(person => {})
// // personsDocument.haveAttribute('');
// // personsCollection.collection({path: "addresses"});
//
// import { CustomEventMap, DocumentUpdatePayload } from '../index'
//
// type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[]
// 	? ElementType
// 	: never
//
// /*
// |--------------------------------------------------------------------------
// | Hooks Export
// |--------------------------------------------------------------------------
// |
// | Export all your hooks bellow.
// |
// */
//
// // Actions
// // Insert
// // Update
// // Delete
//
// type D = { [key in keyof CustomEventMap]: `${key}` }
//
// const ZendexaEvent: D = {
// 	ZENDEXA_DOCUMENT_UPDATE: 'ZENDEXA_DOCUMENT_UPDATE'
// 	// DOCUMENT_DELETE: 'DOCUMENT_DELETE_EVENT',
// 	// DOCUMENT_ARRAY_INSERT: 'DOCUMENT_ARRAY_INSERT_EVENT',
// 	// DOCUMENT_ARRAY_UPDATE: 'DOCUMENT_ARRAY_UPDATE_EVENT',
// 	// DOCUMENT_ARRAY_DELETE: 'DOCUMENT_ARRAY_DELETE_EVENT',
// }
//
// class Collection<T> {
// 	constructor(
// 		private name: string,
// 		private items: T[],
// 		private readonly deps: string[] = []
// 	) {}
//
// 	get collect() {
// 		return this.items
// 	}
//
// 	insert(value: T) {
// 		// window.dispatchEvent(
// 		//   new CustomEvent(ZendexaEvent.DOCUMENT_INSERT, {
// 		//     detail: { path: '', value },
// 		//   })
// 		// );
// 	}
//
// 	find(callback: (value: T) => boolean): Document1<T> {
// 		return new Document1<T>(
// 			this.name,
// 			this.items.find((item, index) => {
// 				const result = callback(item)
// 				if (result) this.deps.push(`[${index}]`)
// 				return result
// 			})!,
// 			this.deps
// 		)
// 	}
// }
//
// class Document1<T> {
// 	constructor(
// 		private name: string,
// 		private item: T,
// 		private readonly deps: string[] = []
// 	) {}
//
// 	document<Name extends keyof T & string, R extends T[Name] = T[Name]>(name: Name): Document1<R> {
// 		return new Document1<R>(name, this.item[name] as R, [...this.deps, name])
// 	}
//
// 	collection<Name extends keyof T & string, R extends ArrayElement<T[Name]>>(
// 		name: Name
// 	): Collection<R> {
// 		return new Collection<R>(name, this.item[name] as R[], [...this.deps, name])
// 	}
//
// 	read() {
// 		return this.item
// 	}
//
// 	update(callback: (item: T) => void) {
// 		console.log(this.deps.join('.'))
// 		window.dispatchEvent(
// 			new CustomEvent(ZendexaEvent.ZENDEXA_DOCUMENT_UPDATE, {
// 				detail: { path: '', value: 0 }
// 			})
// 		)
// 	}
//
// 	delete(callback: (item: T) => void) {
// 		console.log(this.deps.join('.'))
// 		// window.dispatchEvent(
// 		//   new CustomEvent(ZendexaEvent.DOCUMENT_DELETE, {
// 		//     detail: { path: '', value: 0 },
// 		//   })
// 		// );
// 	}
// }
//
// type F = {
// 	id: number
// 	first_name: string
// 	address: {
// 		contact: {
// 			addresses: [
// 				{
// 					person: {
// 						id: 0
// 					}
// 					contacts: [
// 						{
// 							number: string
// 						}
// 					]
// 				}
// 			]
// 		}
// 	}
// 	addresses: [
// 		{
// 			person: {
// 				id: number
// 			}
// 			contacts: [
// 				{
// 					number: ''
// 				}
// 			]
// 		}
// 	]
// }
//
// const data = {
// 	id: 1,
// 	first_name: '',
// 	address: {
// 		contact: {
// 			addresses: [
// 				{
// 					person: {
// 						id: 0
// 					},
// 					contacts: [
// 						{
// 							number: ''
// 						}
// 					]
// 				}
// 			]
// 		}
// 	},
// 	addresses: [
// 		{
// 			person: {
// 				id: 0
// 			},
// 			contacts: [
// 				{
// 					number: ''
// 				}
// 			]
// 		}
// 	]
// }
//
// function useDocument<State>(path: string): Document1<State> {
// 	return new Document1<State>('form', data as State)
// }
//
// const doc = useDocument<F>('workitem')
//
// const { contacts, person } = doc
// 	.document('address')
// 	.document('contact')
// 	.collection('addresses')
// 	.find(address => address.person.id === 0)
// 	.read()
//
// doc
// 	.document('address')
// 	.document('contact')
// 	.collection('addresses')
// 	.insert({ contacts: [{ number: '' }], person: { id: 0 } })
// // .find((address) => address.person.id === 0)
// // .document('person')
// // .update((person) => ({ ...person }));
//
// window.addEventListener(
// 	ZendexaEvent.ZENDEXA_DOCUMENT_UPDATE,
// 	(e: CustomEvent<DocumentUpdatePayload<string>>) => {
// 		console.log('Event', e.detail)
// 	}
// )
//
// // address.find((address) => address.person.id === 0);
//
// // persons
// //   .query()
// //   .find((person) => person.id === 0)
// //   .select('addresses')
// //   .find((address) => address.person.id === 0)
// //   .select("contacts")
// //   .find(contacts => contacts.number === '')
// //   .collect()
// // .update((person) => ({ ...person }));
