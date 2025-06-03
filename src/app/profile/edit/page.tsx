"use client";

import { useState } from "react";
import styles from "./ProfileEdit.module.css";

export default function ProfileEditPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでAPI送信などの処理を行う
    alert("プロフィールを保存しました");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>プロフィール編集</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          名前:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          年齢:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          性別:
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </label>
        <label>
          職業:
          <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
        </label>
        <label>
          自己紹介:
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </label>
        <button type="submit" className="button">保存</button>
      </form>
    </main>
  );
}
