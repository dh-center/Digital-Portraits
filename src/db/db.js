const data = require('./all_paintings1.json');

const painters = [];
const paintings = [];

function createId() {
    return Math.random().toString(36).substr(2, 9);
}

Object.entries(data).forEach(value => {
    const [painterName, authorPaintings] = value;

    const painter = {
        id: createId(),
        name: painterName,
        paintings_id: []
    }

    authorPaintings.forEach(painting => {
        const id = createId();
        paintings.push({
            id,
            painter_id: painter.id,
            ...painting,
        })

        painter.paintings_id.push(id)
    })

    painters.push(painter)
})

// console.log(painters)

module.exports = {
    painters,
    paintings,
}

