---
title: "Re-Enrolling"
---


If you followed the guide as recommended, you should have installed fakemurk, which means that you can just select the "Emergency Revert and Re-Enroll" option in mush and go on with your day. Or if you installed murkmod you can select "Update Emergency Backup" to update the backup to the latest verion of ChromeOS, then select "Emergency Revert and Re-Enroll" to get back to the latest version.

## Prerequisites

- A USB drive, 8gb or larger, for recovery

## Section I - Flash a Recovery Drive

You can skip this step if you already have a recovery drive for any version and the correct board.

Find your board at one of the following URLs, and download the recovery image for the highest version available.

- [chrome100](https://chrome100.dev/)
- [chrome81](https://rainestorme.github.io/chrome81/)
- [cros.tech](https://cros.tech/)

Got your recovery image? Great! Now, there are some differing instructions depending on your platform.

### On *nix

On a ChromeOS device in developer mode, you can also use the following instructions to flash the drive. Otherwise, you can download the [Chromebook Recovery Utility](https://chromewebstore.google.com/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) from the Chrome Webstore and use that to flash the drive. Just click on the top right button in the window and select "Use Local File", then select your .bin file. This probably won't work on an enrolled device, but if the extension is unblocked, you can do it entirely on that Chromebook.

Good choice of operating system, by the way. Most distros will come with the `dd` utility built-in. If yours doesn't, then choose a different distro or find a way to flash the recovery image. Run the following command, making sure that you have the correct /dev path to your USB drive and the correct path to your recovery image:

```sh
dd if=/path/to/recovery-image.bin of=/dev/sdX status=progress
```

In a few minutes, you should be done, and the command should exit with a 0 exit code.

### On Windows

Download [Rufus](https://rufus.ie/) and run the executable. Select the .bin file you just downloaded and select your USB drive. Click on flash and follow the prompts. If asked, select "Flash in DD mode".

### On MacOS

Download [Etcher](https://www.balena.io/etcher) and run the excutable. Select the .bin file and your USB drive. Click on flash and follow the prompts.

## Section II - Enable Developer Mode and Re-Enroll

This part is pretty simple. Just enable developer mode if you haven't already (`Esc+Refresh+Power`, `Ctrl+D`, reboot, `Ctrl+D` to boot) and open a crosh tab (`Ctrl+Alt+T`). Run the following commands:

```sh
shell
sudo su
vpd -i RW_VPD -s check_enrollment=1
```

## Section III - Disable Developer Mode and Recover

Reboot your device (`Refresh+Power`). At the developer mode warning screen, press `Space` and then `Enter` to disable developer mode. Then, press and hold `Esc+Refresh+Power` and plug in your recovery drive. Wait for recovery to finish, then reboot and set up the device normally with an enterprise account.

## Section IV - Finished!

You're done with the guide! Your Chromebook now has no trace of following this guide. Return it at the end of the year, and go on with your life.
