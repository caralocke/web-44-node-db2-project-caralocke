const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const create = async (car) => {
  const [id] = await db('cars').insert(car)
  const newlyCreatedCar = await getById(id)
  return newlyCreatedCar
}

module.exports = {
  getAll,
  getById,
  create,
}