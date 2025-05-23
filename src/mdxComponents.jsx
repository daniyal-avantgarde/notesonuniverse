const components = {
    h1: (props) => <h1 className="hover:text-green-400 text-8xl" {...props}/>,
    p: (props) => <p className="text-lg leading-7 mb-4" {...props} />,
    code: (props) => <code className="bg-gray-100 p-1 rounded" {...props} />,
}

export default components