export function formatMessageTime(date) {
  const d = new Date(date);
  const now = new Date();

  const hour = String(d.getHours()).padStart(2, "0");
  const minute = String(d.getMinutes()).padStart(2, "0");

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  if (isToday) {
    return `${hour}:${minute}`;
  }

  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `${hour}:${minute} ${day} Tháng ${month}, ${year}`;
}


export const isSameGroup = (current, previous) => {
  if (!previous) return false;

  const sameSender = current.senderId === previous.senderId;
  const timeDiff =
    new Date(current.createdAt) - new Date(previous.createdAt);

  return sameSender && timeDiff < 60 * 1000;
};
