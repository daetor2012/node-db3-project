const db = require("../data/config")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({ id }).first()
}

function findSteps(id) {
    return db("steps as s")
        .join("schemes as sc", "sc.id", "s.scheme_id")
        .where("s.scheme_id", id)
        .select("s.id", "sc.scheme_name", "s.step_number", "s.instructions")
}

async function add(data) {
    try {
        const [id] = await db("schemes").insert(data)

        return findById(id)
    } catch {
        return { message: "Didn't work." }
    }

    
}

async function update(changes, id) {
    try {
        await db("schemes")
        .where({ id })
        .update(changes)
    return findById(id)
    } catch {
        return { message: "Scheme name must be unique."}
    }
    
}

async function remove(id) {
    try {
        return db("schemes")
        .where({ id })
        .del()
    } catch {
        return null;
    }
    
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

/*-   `findSteps(id)`:
    -   Expects a scheme `id`.
    -   Resolves to an array of all correctly ordered step for the given scheme: `[ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.
    -   This array should include the `scheme_name` _not_ the `scheme_id`.*/