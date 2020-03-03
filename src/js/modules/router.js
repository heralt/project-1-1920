export function routing() {
    routie({
        "boek-id/:id": id => {
            console.log(id);
        },
    });
}