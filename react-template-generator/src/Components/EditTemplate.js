const EditTemplate = ({
  fileContent,
  setUpdated,
  updated,
  updateGithubFile,
}) => {
  return (
    <>
      <div
        id="EditGithubContent"
        style={{
          width: "90%",
          height: "80vh",
          margin: "auto",
        //   border: "1px solid",
          overflow: "scroll"
        }}
        dangerouslySetInnerHTML={{ __html: atob(fileContent.content) }}
        contentEditable={true}
        onKeyDown={(e) => setUpdated(e.currentTarget.innerHTML)}
      ></div>
    
    </>
  );
};

export default EditTemplate;
