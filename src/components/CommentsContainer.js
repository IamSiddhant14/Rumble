const CommentData = [
    { name: 'sidd', text: "text", replies: [] },
    { name: 'sidd', text: "text", replies:  [] },
    {
        name: 'sidd', text: "hi", replies: [
            { name: 'sidd', text: "hi",  replies: []},
            { name: 'sidd', text: "hi",  replies: [] },
            {
                name: 'sidd', text: "hi", replies: [
                    { name: 'sidd', text: "hi", replies: [] },
                    { name: 'sidd', text: "hi",  replies: [] }, { name: 'sidd', text: "hi",  replies: [] },
                    { name: 'sidd', text: "hi",  replies: [] }, { name: 'sidd', text: "hi",  replies: []},
                    {
                        name: 'sidd', text: "hi", replies: [
                            { name: 'sidd', text: "hi",  replies: [] },
                            { name: 'sidd', text: "hi",  replies: [] }, { name: 'sidd', text: "hi",  replies: [] },
                            { name: 'sidd', text: "hi",  replies: [] },
                        ]
                    }
                ]
            }
        ]
    },

]


const Comment = ({ data }) => {

    const { name, text, replies } = data;

    return (

        <div className="flex shadow-sm bg-gray-300 p-2 rounded-lg my-2">
            <img
                className="w-12 h-12" alt="user" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" />

            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )

}


const CommentsList = ({ comments }) => {

    return (
        comments.map((comment, id) => (
            <div className=" border border-l-black">
                <Comment key={id} data={comment} />
                <div className="pl-5 border-l-black ml-5">
                  <CommentsList key={id+9234234} comments={comment.replies}/>
                </div>
            </div>
        ))

    );
}


const CommentsContainer = () => {
    return (
        <div className=" mt-[-430px] p-2 ">
            <h1 className="text-2xl font-bold">Comments :</h1>
            <CommentsList comments={CommentData} />
        </div>
    )
}

export default CommentsContainer;