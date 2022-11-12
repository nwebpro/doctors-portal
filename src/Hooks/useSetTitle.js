import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Doctors Portal`
    }, [title])
}

export default useSetTitle