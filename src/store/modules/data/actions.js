export default {
    genderFilter(context, payload) {
        context.commit('genderFilter', { gender: payload.gender })
    },
    async editContact(context, payload) {

        try {
            const userId = context.rootGetters.userId;
            const Id = payload.id;
            const data = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                gender: payload.gender,
                phone: payload.phone,
                email: payload.email,
                address: payload.address,
                city: payload.city,
                country: payload.country
            }
            const response = await fetch(`https://contacts-8b9b7-default-rtdb.firebaseio.com/contacts/${userId}/${Id}.json`, {
                method: 'PUT',
                body: JSON.stringify(
                    data
                )
            })


            console.log(response)

            context.commit('addContact', {
                id: new Date().toISOString(), ...data
            })
        } catch (err) {
            const error = new Error(err.message || 'Unable to edit your Friend Details, check your Internet Connection ')
            throw error
        }
    },
    async addContact(context, payload) {
        try {
            const userId = context.rootGetters.userId;
            const data = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                gender: payload.gender,
                phone: payload.phone,
                email: payload.email,
                address: payload.address,
                city: payload.city,
                country: payload.country
            }
            const response = await fetch(`https://contacts-8b9b7-default-rtdb.firebaseio.com/contacts/${userId}.json`, {
                method: 'POST',
                body: JSON.stringify({
                    ...data
                })
            })

            console.log(response)

            context.commit('addContact', {
                id: new Date().toISOString(), ...data
            })
        } catch (err) {
            const error = new Error(err.message || 'Unable to Add Friend. Check your Internet Connection 🤔 ')
            throw error
        }
    },
    async setContacts(context) {
        try {
            const userId = context.rootGetters.userId;
            const response = await fetch(`https://contacts-8b9b7-default-rtdb.firebaseio.com/contacts/${userId}.json`)

            const responseData = await response.json()

            const contacts = [];

            for (const key in responseData) {
                const contact = {
                    id: key,
                    firstName: responseData[key].firstName,
                    lastName: responseData[key].lastName,
                    gender: responseData[key].gender,
                    phone: responseData[key].phone,
                    email: responseData[key].email,
                    address: responseData[key].address,
                    city: responseData[key].city,
                    country: responseData[key].country

                }
                contacts.push(contact)
            }
            context.commit('setContacts', contacts)
        } catch (err) {
            const error = new Error(err.message || "Couldn't load Your Friends 😢. Check your Internet Connection")
            throw error
        }
    },
    async deleteContact(context, payload) {
        try {
            const UserId = context.rootGetters.userId
            const Id = payload.id

            const response = await fetch(`https://contacts-8b9b7-default-rtdb.firebaseio.com/contacts/${UserId}/${Id}.json`,
                { method: "DELETE" })

            console.log(response)
            context.dispatch('setContacts')
        } catch (err) {
            const error = new Error(err.message || "Your friends Still wants you, Unable to delete 😢")
            throw error
        }
    },
    async setActiveContact(context, payload) {
        const Id = payload.id
        try {
            const userId = context.rootGetters.userId;
            const response = await fetch(`https://contacts-8b9b7-default-rtdb.firebaseio.com/contacts/${userId}/${Id}.json`)

            const responseData = await response.json()
            context.commit('setActiveContact', responseData)
        } catch (err) {
            const error = new Error(err.message || "Couldn't load Your Friend 😢. Check your Internet Connection")
            throw error
        }
    },
}