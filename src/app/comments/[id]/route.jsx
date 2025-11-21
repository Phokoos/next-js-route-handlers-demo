import {comments} from "@/app/comments/data";

export async function GET(_request, {params}) {
    const {id} = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));

    if (!comment) {
        return Response.json({"message": 'Comment Not Found'}, {status: 404});
    }

    return Response.json(comment);
}

export async function PATCH(request, {params}) {
    const {id} = await params;
    const body = await request.json();
    const {text} = body;

    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index === -1) {
        return Response.json({"message": 'Comment Not Found'}, {status: 404});
    }
    comments[index].text = text;

    return Response.json(comments[index]);
}

export async function DELETE(_request, {params}) {
    const {id} = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index === -1) {
        return Response.json({"message": 'Comment Not Found'}, {status: 404});
    }

    const deletedComment = comments[index];
    comments.splice(index, 1);

    return Response.json(deletedComment, {status: 200});
}