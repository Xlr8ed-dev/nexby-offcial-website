// import { useEffect, useState } from "react";
// import Form from "./Form";

// /* backend → frontend type mapping */
// type FieldType = "text" | "email" | "phone" | "select" | "textarea";

// const mapBackendTypeToFrontend = (type: string): FieldType => {
//   switch (type) {
//     case "email":
//       return "email";
//     case "tel":
//       return "phone";
//     case "select":
//       return "select";
//     case "textarea":
//       return "textarea";
//     default:
//       return "text";
//   }
// };

// const DynamicFormContainer = () => {
//   const [fields, setFields] = useState<any[]>([]);
//   const [title, setTitle] = useState<string>("");

//   useEffect(() => {
//     fetch("http://localhost:3100/api/form/3")
//       .then((res) => res.json())
//       .then((data) => {
//         const backendFields = data.form.schema.fields;

//         const mappedFields = backendFields
//           .filter((f: any) => f.type !== "submit")
//           .map((field: any) => ({
//             id: field.id,
//             label: field.label,
//             type: mapBackendTypeToFrontend(field.type),
//             required: field.required,
//             options: field.options ?? [],
//           }));

//         setTitle(data.form.title);
//         setFields(mappedFields);
//       })
//       .catch(console.error);
//   }, []);

//   const handleSubmit = async (formData: Record<string, any>) => {
//     const payload = {
//       formId: 3,
//       response: {
//         ...formData,
//         // mobile_number: Number(formData.mobile_number),
//         mobile_number: Number(formData.mobile_number?.number),
//       },
//     };

//     const res = await fetch("http://localhost:3100/api/form/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const result = await res.json();
//     console.log("Submit response:", result);
//   };

//   return (
//     <Form
//       title={title}
//       buttonName="Request Strategy Call"
//       fields={fields}
//       onSubmit={handleSubmit}
//     />
//   );
// };

// export default DynamicFormContainer;

import { useEffect, useState } from "react";
import Form from "./Form";
import { Navigate, useNavigate } from "react-router-dom";

type FieldType = "text" | "email" | "phone" | "select" | "textarea";

const mapBackendTypeToFrontend = (type: string): FieldType => {
  switch (type) {
    case "email":
      return "email";
    case "tel":
      return "phone";
    case "select":
      return "select";
    case "textarea":
      return "textarea";
    default:
      return "text";
  }
};

interface DynamicFormContainerProps {
  formId: number;
}

const DynamicFormContainer: React.FC<DynamicFormContainerProps> = ({
  formId,
}) => {
  const [fields, setFields] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("Submit");

  const Navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3100/api/form/${formId}`)
      .then((res) => res.json())
      .then((data) => {
        const backendFields = data.form.schema.fields;

        const submitField = backendFields.find((f: any) => f.type === "submit");

        const mappedFields = backendFields
          .filter((f: any) => f.type !== "submit")
          .map((field: any) => ({
            id: field.id,
            label: field.label,
            type: mapBackendTypeToFrontend(field.type),
            required: field.required,
            options: field.options ?? [],
          }));

        setTitle(data.form.title);
        setDescription(data.form.description);
        setButtonName(submitField?.label || "Submit");
        setFields(mappedFields);
      })
      .catch(console.error);
  }, [formId]);

  const handleSubmit = async (formData: Record<string, any>) => {
    const payload = {
      formId,
      response: {
        ...formData,
        mobile_number: Number(formData.mobile_number?.number),
      },
    };

    await fetch("http://localhost:3100/api/form/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    Navigate("/thank-you", {
      state: { formId },
    });
  };

  return (
    <Form
      title={title}
      description={description}
      buttonName={buttonName}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
};

export default DynamicFormContainer;
