
import { 
  Create,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateComment(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <ReferenceInput label="posts" source="postsid" reference="posts">
        <AutocompleteInput variant="outlined" /* optionText="posts"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
