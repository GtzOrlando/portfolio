import './ThemeSelect.css';

export default function ThemeSelect() {

    return (
        <select>
            <option id="system__theme">🖥️ Default</option>
            <option id="light__theme">☀️ Light</option>
            <option id="dark__theme">🌙 Dark</option>
        </select>
    )

}