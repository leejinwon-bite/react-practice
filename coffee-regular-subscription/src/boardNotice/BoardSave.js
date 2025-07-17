

const BoardSave = () => {

    return(
       <section> 
            <form action="/saveToDB" method="post" enctype="multipart/form-data">
                Title: <input type="text" name="boardTitle" required /><br />
                Writer: <input type="text" name="boardWriter" required /><br />
                Contents: <input type="text" name="boardContents" required /><br />
                Attached Files: <input type="file" name="boardFile" multiple /><br />
                <input type="submit" value="작성" />
            </form>
       </section> 
    );

}

export default BoardSave;