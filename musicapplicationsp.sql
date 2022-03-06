-- phpMyAdmin SQL Dump
-- version 5.0.4deb2ubuntu5
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `songs` (
  `id` int NOT NULL,
  `UserID` varchar(64) NOT NULL,
  `songName` varchar(55) NOT NULL
)

CREATE TABLE `SpotifyClientId` (
  `id` int NOT NULL,
  `UserID` varchar(180) NOT NULL,
  `ClientID` varchar(180) NOT NULL,
  `iv` varchar(64) NOT NULL
)

ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `SpotifyClientId`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `songs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

ALTER TABLE `SpotifyClientId`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;