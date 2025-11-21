export const dynamic = 'force-dynamic';

export async function GET() {
    const categories = [
        {
            id: 1,
            name: 'Technology'
        },
        {
            id: 2,
            name: 'Health'
        },
        {
            id: 3,
            name: 'Science'
        },
        {
            id: 4,
            name: 'Sports 1'
        }
    ];

    return Response.json(categories);
}