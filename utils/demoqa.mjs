export async function fillTextBox(page, data) {
  await page.getByRole('textbox', { name: 'Full Name' }).fill(data.fullName ?? data.Fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(data.email ?? data.Email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(
    data.currentAddress ?? data.CurrentAddress,
  );
  await page.locator('#permanentAddress').fill(data.permanentAddress ?? data.PermanentAddress);
}

export async function submitTextBox(page) {
  await page.getByRole('button', { name: 'Submit' }).press('Enter');
}

export async function expectTextBoxOutput(page, expect, data) {
  const output = page.locator('#output');
  const fullName = data.fullName ?? data.Fullname;
  const email = data.email ?? data.Email;
  const currentAddress = data.currentAddress ?? data.CurrentAddress;
  const permanentAddress = data.permanentAddress ?? data.PermanentAddress;

  await expect(output).toContainText(`Name:${fullName}`);
  await expect(output).toContainText(`Email:${email}`);
  await expect(output).toContainText(`Current Address :${currentAddress}`);
  await expect(output).toContainText(`Permananet Address :${permanentAddress}`);
}

export async function addWebTableRow(page, row) {
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(row.firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(row.lastName);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(row.email);
  await page.getByRole('textbox', { name: 'Age' }).fill(String(row.age));
  await page.getByRole('textbox', { name: 'Salary' }).fill(String(row.salary));
  await page.getByRole('textbox', { name: 'Department' }).fill(row.department);
  await page.getByRole('button', { name: 'Submit' }).click();
}