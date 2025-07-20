import prisma from '../config/database.js'

export async function getAllShoes(req, res) {
    const shoes = await prisma.shoes.findMany();

    res.status(200).json(shoes);
}

export async function addNewShoes(req, res) {
    const { name, size, color, brand, price, photoUrl, stock } = req.body;

    if (!name || !size || !color || !brand || !price || !photoUrl || !stock) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    await prisma.shoes.create({
        data: {
            name,
            size,
            color,
            brand,
            price,
            photoUrl,
            stock
        }
    })

    res.status(201).json({ name, size, color });
}

export async function deleteShoesById(req, res) {
    const { id } = req.params;

    await prisma.shoes.delete({
        where: { id }
    })

    res.status(204).send();
}