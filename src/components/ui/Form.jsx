import { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import emailjs from "@emailjs/browser"; // Import EmailJS

export default function AdmissionForm() {
  const initialState = {
    studentName: "",
    rollNo: "",
    dateOfBirth: "",
    placeOfBirth: "",
    fatherInfo: "",
    motherInfo: "",
    guardianInfo: "",
    correspondenceAddress: "",
    permanentAddress: "",
    annualIncome: "",
    siblingInfo: "",
    community: "",
    religion: "",
    nationality: "",
    isHandicapped: "no",
    lastSchool: "",
    phoneNumber: "",
    lastClassStudied: "",
  };
  const [formData, setFormData] = useState(
    // Added last class studied field
    initialState
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_5snwhdj", // Replace with your EmailJS Service ID
        "template_lelqf0i", // Replace with your EmailJS Template ID
        formData,
        "OnKjb4bLI3Zlk_JNT" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Admission form submitted successfully!");
          setFormData(initialState);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to submit the form. Please try again.");
        }
      );

    // Log form data to the console
    console.log(formData);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 md:p-6 md:ml-[25rem] shadow-lg ">
        {" "}
        {/* Responsive padding */}
        <h1 className="text-2xl md:text-3xl font-bold mt-4 text-center">
          Admission Form
        </h1>{" "}
        {/* Responsive text size and center alignment */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {" "}
            {/* Responsive grid */}
            {/* Student Name */}
            <div className="space-y-2">
              <Label htmlFor="studentName">
                Name of Student (in Block Letters)
              </Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Roll No */}
            <div className="space-y-2">
              <Label htmlFor="rollNo">Roll No. of student</Label>
              <Input
                id="rollNo"
                value={formData.rollNo}
                onChange={(e) =>
                  setFormData({ ...formData, rollNo: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Place of Birth */}
            <div className="space-y-2">
              <Label htmlFor="placeOfBirth">Place of Birth</Label>
              <Input
                id="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, placeOfBirth: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Father's Info */}
            <div className="space-y-2">
              <Label htmlFor="fatherInfo">Father's Name & Qualification</Label>
              <Input
                id="fatherInfo"
                value={formData.fatherInfo}
                onChange={(e) =>
                  setFormData({ ...formData, fatherInfo: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Mother's Info */}
            <div className="space-y-2">
              <Label htmlFor="motherInfo">Mother's Name & Qualification</Label>
              <Input
                id="motherInfo"
                value={formData.motherInfo}
                onChange={(e) =>
                  setFormData({ ...formData, motherInfo: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Guardian's Info */}
            <div className="space-y-2">
              <Label htmlFor="guardianInfo">
                Guardian's Name & Qualification (if any)
              </Label>
              <Input
                id="guardianInfo"
                value={formData.guardianInfo}
                onChange={(e) =>
                  setFormData({ ...formData, guardianInfo: e.target.value })
                }
                className="w-full"
              />
            </div>
            {/* Annual Income */}
            <div className="space-y-2">
              <Label htmlFor="annualIncome">
                Annual Income of Parent/Guardian
              </Label>
              <Input
                id="annualIncome"
                value={formData.annualIncome}
                onChange={(e) =>
                  setFormData({ ...formData, annualIncome: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
          </div>

          {/* Correspondence Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {" "}
            {/* Responsive grid */}
            <div className="space-y-2">
              <Label htmlFor="correspondenceAddress">
                Correspondence Address
              </Label>
              <Textarea
                id="correspondenceAddress"
                value={formData.correspondenceAddress}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    correspondenceAddress: e.target.value,
                  })
                }
                rows={4}
                className="w-full"
                required
              />
            </div>
            {/* Permanent Address */}
            <div className="space-y-2">
              <Label htmlFor="permanentAddress">Permanent Address</Label>
              <Textarea
                id="permanentAddress"
                value={formData.permanentAddress}
                onChange={(e) =>
                  setFormData({ ...formData, permanentAddress: e.target.value })
                }
                rows={4}
                className="w-full"
                required
              />
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {" "}
            {/* Responsive grid */}
            {/* Sibling Info */}
            <div className="space-y-2">
              <Label htmlFor="siblingInfo">
                Name of brother/sister studying in this school (if any)
              </Label>
              <Input
                id="siblingInfo"
                value={formData.siblingInfo}
                onChange={(e) =>
                  setFormData({ ...formData, siblingInfo: e.target.value })
                }
                className="w-full"
              />
            </div>
            {/* Community */}
            <div className="space-y-2">
              <Label htmlFor="community">Community</Label>
              <Input
                id="community"
                value={formData.community}
                onChange={(e) =>
                  setFormData({ ...formData, community: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Religion */}
            <div className="space-y-2">
              <Label htmlFor="religion">Religion</Label>
              <Input
                id="religion"
                value={formData.religion}
                onChange={(e) =>
                  setFormData({ ...formData, religion: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Nationality */}
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Handicapped */}
            <div className="space-y-2">
              <Label htmlFor="isHandicapped">
                Whether the Pupil is mentally or physically handicapped?
              </Label>
              <Select
                value={formData.isHandicapped}
                onValueChange={(value) =>
                  setFormData({ ...formData, isHandicapped: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Last School */}
            <div className="space-y-2">
              <Label htmlFor="lastSchool">
                Name and Address of last attended school
              </Label>
              <Input
                id="lastSchool"
                value={formData.lastSchool}
                onChange={(e) =>
                  setFormData({ ...formData, lastSchool: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Last Class Studied */}
            <div className="space-y-2">
              <Label htmlFor="lastClassStudied">Last Class Studied</Label>
              <Input
                id="lastClassStudied"
                value={formData.lastClassStudied}
                onChange={(e) =>
                  setFormData({ ...formData, lastClassStudied: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                className="w-full"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
