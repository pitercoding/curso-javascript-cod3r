export async function GET(request, { params }) {
    const id = params.id;

    return Response.json({
        id,
        nome: "Maria",
        email: "maria@gmail.com"
    });
}