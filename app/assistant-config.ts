export let assistantId = "asst_fCEsZfxYbvxNTg0M2V55Db9m"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
